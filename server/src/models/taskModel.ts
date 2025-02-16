import mongoose, { Schema, Document } from "mongoose";

// Interface for Task Document
export interface ITask extends Document {
    taskName: string;
}

// Task Schema
const TaskSchema = new Schema<ITask>(
    {
        taskName: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true, 
    }
);

// Export Task Model
const Task = mongoose.model<ITask>("assignment_abhishek_oraon", TaskSchema);
export default Task;
