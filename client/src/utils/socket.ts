import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';
console.log(SOCKET_URL);

if (!SOCKET_URL) {
  throw new Error("Socket server URL is not defined in environment variables.");
}

export const socket = io(SOCKET_URL, {
  autoConnect: true,
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Connected to WebSocket server");
});

socket.on("connect_error", (error) => {
  console.error("WebSocket connection error:", error);
});