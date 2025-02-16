import mongoose from "mongoose";

// handles the DB connection
export const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables.");
        }

        // Connecting to MongoDB with URI
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "assignment",
        });

        console.log("✅ Connected to MongoDB server successfully!");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB server:", error);
        // Exit process with failure
        process.exit(1); 
    }
};