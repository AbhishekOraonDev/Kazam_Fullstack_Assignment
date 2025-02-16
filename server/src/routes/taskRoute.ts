import express from "express";
import { createTask, fetchTasks } from "../controllers/taskController";

const router = express.Router();

// Create Task
router.post("/createTask", createTask);

// Get All Tasks with advanced search
router.get("/fetchAllTasks", fetchTasks);


export default router;
