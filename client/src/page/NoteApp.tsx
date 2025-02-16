import React, { useState, useEffect } from "react";
import NoteList from "../component/NoteList";
import { AddNote } from "../component/AddNote";
import logo1 from "../assets/taskMLogo.png";
import { socket } from "../utils/socket"; // Import the socket instance

const NoteApp: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  // Listen for real-time task updates
  useEffect(() => {
    socket.on("taskCreated", (newTask: { taskName: string }) => {
      setNotes((prevNotes) => [newTask.taskName, ...prevNotes]);
    });

    return () => {
      socket.off("taskCreated"); // Clean up the event listener
    };
  }, []);

  // Handle new task creation
  const handleTaskCreated = (taskName: string) => {
    setNotes((prevNotes) => [taskName, ...prevNotes]);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-dot-black/[0.2] bg-dot-black/[0.2]">
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4 text-3xl font-inter font-bold text-black mb-6">
            <img
              src={logo1}
              alt="Note icon"
              className="w-8 h-8 object-contain"
            />
            Note App
          </div>
          <AddNote onTaskCreated={handleTaskCreated} />
          <NoteList notes={notes}/>
        </div>
      </div>
    </div>
  );
};

export default NoteApp;