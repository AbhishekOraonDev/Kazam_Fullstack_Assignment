// src/components/TaskList.tsx
import React, { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskService";
import { socket } from "../utils/socket";

const NoteItem: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  // Fetch tasks on component mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetchTasks();
        setTasks(response.data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    loadTasks();
  }, []);

  // Listen for real-time task updates
  useEffect(() => {
    socket.on("taskCreated", (newTask: { taskName: string }) => {
      setTasks((prevTasks) => [...prevTasks, newTask.taskName]);
    });

    return () => {
      socket.off("taskCreated");
    };
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-lg">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteItem;