import React, { useEffect, useState, useRef } from "react";
import { fetchTasks } from "../services/taskService";
import { socket } from "../utils/socket";
import { Tooltip } from "react-tooltip";
import { ToastContainer } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";

interface NoteListProps {
    notes: string[];
  }

const NoteList: React.FC<NoteListProps> = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [truncatedTasks, setTruncatedTasks] = useState<Set<number>>(new Set());
    const taskRefs = useRef<Array<HTMLLIElement | null>>([]);

    // Fetch tasks on component mount
    useEffect(() => {
        const loadTasks = async () => {
            try {
                const response = await fetchTasks();
                setTasks([...response.data].reverse());
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        };
        loadTasks();
    }, []);

    // Listen for real-time task updates
    useEffect(() => {
        socket.on("taskCreated", (newTask: { taskName: string }) => {
            setTasks((prevTasks) => [newTask.taskName, ...prevTasks]);
        });

        return () => {
            socket.off("taskCreated");
        };
    }, []);

    // Check which tasks are truncated after render or window resize
    useEffect(() => {
        const checkTruncatedTasks = () => {
            const newTruncatedTasks = new Set<number>();

            taskRefs.current.forEach((ref, index) => {
                if (ref) {
                    const isOverflowing = ref.scrollWidth > ref.clientWidth;
                    if (isOverflowing) {
                        newTruncatedTasks.add(index);
                    }
                }
            });

            setTruncatedTasks(newTruncatedTasks);
        };

        // Run check after render
        checkTruncatedTasks();

        // Also check on window resize
        window.addEventListener('resize', checkTruncatedTasks);
        return () => window.removeEventListener('resize', checkTruncatedTasks);
    }, [tasks]);

    // Reset refs array when tasks change
    useEffect(() => {
        taskRefs.current = taskRefs.current.slice(0, tasks.length);
    }, [tasks]);

    // Callback ref function with correct type
    const setTaskRef = (el: HTMLLIElement | null, index: number) => {
        taskRefs.current[index] = el;
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

            <div className="space-y-2">
                <h2 className="text-xl font-inter font-bold">Notes</h2>
                <div className="max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-webkit">
                    <ul className="space-y-2">
                        {/* {tasks.map((task, index) => (
                            <li 
                                key={index} 
                                ref={(el) => setTaskRef(el, index)}
                                className="p-2 border-t-2 font-inter overflow-hidden text-ellipsis whitespace-nowrap"
                                data-tooltip-id={truncatedTasks.has(index) ? `task-tooltip-${index}` : undefined}
                            >
                                {task}
                            </li>
                        ))} */}
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                ref={(el) => setTaskRef(el, index)}
                                className="p-2 border-t-2 font-inter overflow-hidden text-ellipsis whitespace-nowrap"
                                data-tooltip-id={truncatedTasks.has(index) ? `tooltip-${index}` : undefined}
                                data-tooltip-content={truncatedTasks.has(index) ? task : undefined}
                            >
                                {task}
                                {truncatedTasks.has(index) && (
                                    <Tooltip
                                        id={`tooltip-${index}`}
                                        place="top"
                                        className="tooltip-custom bg-gray-900 text-white text-sm px-2 py-1 rounded-md max-w-[320px] sm:max-w-[800px] whitespace-normal break-words shadow-lg"
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NoteList;
