import React, { useState, useEffect } from "react";
import { socket } from "../utils/socket";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddNoteProps {
  onTaskCreated: (taskName: string) => void;
}

export const AddNote: React.FC<AddNoteProps> = ({ onTaskCreated }) => {
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const handleTaskCreated = (newTask: { taskName: string }) => {
      // Call the callback to update the parent component
      onTaskCreated(newTask.taskName);

      // Delay toast execution inside setTimeout
      setTimeout(() => {
        toast.success(`Note "${newTask.taskName}" added successfully!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }, 100); // Delay of 100ms to ensure React state updates first
    };

    // Listen for the taskCreated event
    socket.on("taskCreated", handleTaskCreated);

    return () => {
      // Clean up the event listener
      socket.off("taskCreated", handleTaskCreated);
    };
  }, [onTaskCreated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newNote.trim()) {
      // Emit the createTask event to the server
      socket.emit("add", newNote.trim());
      setNewNote("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="New Note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] shadow-sm font-inter"
          />
          <button
            type="submit"
            className="flex gap-2 px-4 py-2 bg-[#8B4513] hover:bg-[#723A10] text-white font-inter font-bold rounded-lg transition-colors justify-center items-center"
          >
            <PlusCircleIcon className="w-5 h-5" />
            Add
          </button>
        </div>
      </form>
    </>
  );
};