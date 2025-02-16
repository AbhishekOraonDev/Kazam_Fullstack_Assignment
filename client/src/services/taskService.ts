// src/services/taskService.ts
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'; 

export const createTask = async (taskName: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createTask`, { taskName });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fetchAllTasks`);
    return response.data;
  } catch (error) {
    throw error;
  }
};