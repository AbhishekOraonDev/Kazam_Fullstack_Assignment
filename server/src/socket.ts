import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import dotenv from "dotenv";
import Task from "./models/taskModel"; // Import the Task model
import { redisClient } from "./config/redisConnection";

dotenv.config();

const REDIS_KEY = `FULLSTACK_TASK_${process.env.FULL_NAME}`;

export const setupWebSocket = (server: HttpServer) => {
    const io = new Server(server, {
        cors: {
            origin: process.env.ORIGIN1 || "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log("Client connected:", socket.id);

        // Listen for task creation
        socket.on("add", async (taskName: string) => {
            // Add task to Redis or MongoDB
            const cachedTasks = await redisClient.get(REDIS_KEY);
            let tasks = cachedTasks ? JSON.parse(cachedTasks) : [];

            tasks.push(taskName);

            if (tasks.length > 50) {
                // Move tasks to MongoDB and flush Redis
                await Task.insertMany(tasks.map((task: string) => ({ taskName: task })));
                await redisClient.del(REDIS_KEY);
                tasks = [];
            } else {
                // Update Redis cache
                await redisClient.set(REDIS_KEY, JSON.stringify(tasks));
            }

            // Emit real-time update
            io.emit("taskCreated", { taskName });
        });

        // Handle disconnection
        socket.on("disconnect", () => {
            console.log("Client disconnected:", socket.id);
        });
    });

    return io;
};