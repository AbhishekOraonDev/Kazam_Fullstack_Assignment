import { redisClient } from "../config/redisConnection";
import Task from "../models/taskModel";
import dotenv from "dotenv";

dotenv.config();

// redis key for cache
const REDIS_KEY = `FULLSTACK_TASK_${process.env.FULL_NAME}`;


const addTaskToStorage = async (taskName: string) => {
    try {
        // Fetch the existing task from redis
        const cachedTasks = await redisClient.get(REDIS_KEY);
        let tasks: string[] = cachedTasks ? JSON.parse(cachedTasks) : [];

        // Add new task to cache
        tasks.push(taskName);

        // If tasks exceed 50, move them to MongoDB and flush Redis
        if (tasks.length > 50) {
            await Task.insertMany(tasks.map((task) => ({ taskName: task })));
            await redisClient.del(REDIS_KEY);
            console.log("Tasks moved to MongoDB and Redis cache cleared.");
        } else {
            // Update Redis cache
            await redisClient.set(REDIS_KEY, JSON.stringify(tasks));
            console.log("Task added to Redis cache.");
        }
    } catch (error) {
        console.error("Error adding task to storage:", error);
    }
};

export { addTaskToStorage };