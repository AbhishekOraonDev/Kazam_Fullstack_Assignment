import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
    url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_URL}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => console.error("❌ Redis Client Error: ", err));

redisClient.on("connect", () => console.error("✅ Connecting to Redis..."));

redisClient.on("ready", () => console.error("✅ Redis connection established successfully!"));

redisClient.connect();


export {redisClient}