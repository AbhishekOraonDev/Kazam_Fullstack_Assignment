import { catchAsyncError } from "../utils/catchAsyncError";
import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import Joi from "joi";
import Task from "../models/taskModel";
import { io } from "../index";
import { addTaskToStorage } from "../utils/addtoStorage";
import { redisClient } from "../config/redisConnection";


// redis key for cache
const REDIS_KEY = `FULLSTACK_TASK_${process.env.FULL_NAME}`;

// CreateTask schema
const createTaskSchema = Joi.object({
    taskName: Joi.string().min(1).max(50).required(),
});


// Create task API
const createTask = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {

    const { taskName } = req.body;

    // Validate inputs
    const { error } = createTaskSchema.validate({ taskName });
    if (error) return next(new ErrorHandler(error.details[0].message, 400));

    // Add task to Redis/MongoDB
    await addTaskToStorage(taskName);


    // taskcreated real-time update
    io.emit('taskCreated', {
        taskName,
    });

    res.status(201).json({
        success: true,
        message: "Task created successfully",
    });
});



const fetchTasks = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {

    //  Fetch tasks from redis
    const cachedTasks = await redisClient.get(REDIS_KEY);
    const tasksFromRedis: string[] = cachedTasks ? JSON.parse(cachedTasks) : [];

    // fetch tasks from mongoDB
    const tasksFromMongoDB = await Task.find().select("taskName -_id");

    //Combine tasks from redis and mongoDB
    const allTasks = [...tasksFromRedis, ...tasksFromMongoDB.map((task) => task.taskName)];


    res.status(200).json({
        success: true,
        data: allTasks,
        message: "Tasks fetched successfully",
    });
}
);




export { createTask, fetchTasks };
