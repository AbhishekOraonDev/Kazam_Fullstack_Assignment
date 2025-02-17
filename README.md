# Todo Management System

This is a **Todo Management System** designed to provide an efficient way to manage tasks and notes with real-time updates. The system includes both a **frontend (React.js)** and a **backend (Node.js, Express, MongoDB, Redis, and Socket.io)** for seamless user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Middlewares](#middlewares)
- [Docker Implementation](#docker-implementation)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features
- Task creation and management
- Real-time updates using **Socket.io**
- **Responsive UI** for better user experience
- **Caching with Redis** for fast data retrieval
- **RESTful API** with secure and validated endpoints
- **Docker support** for easy deployment

---

## Technologies Used

### Frontend:
- **React.js** - Frontend framework
- **Axios** - API requests
- **Framer Motion** - UI animations
- **Socket.io Client** - Real-time communication
- **Tailwind CSS** - UI styling
- **React-Toastify** - Notification system

### Backend:
- **Node.js** - Backend runtime
- **Express.js** - Web framework for building APIs
- **MongoDB & Mongoose** - Database and ORM
- **Redis** - Caching solution
- **Socket.io** - Real-time event-driven communication

---

## System Architecture
```
Client (React.js) ↔ Server (Node.js & Express.js) ↔ MongoDB (Database)
                              ↕
                        Redis (Caching)
                              ↕
                     Socket.io (Real-time updates)
```

---

## Folder Structure

### Frontend Structure
```bash
├── assets/                     # Handles user assets
├── component/
│   ├── AddNote.tsx              # Add note component
│   ├── NoteList.tsx             # Note list
├── lib/
│   ├── utils.ts                 # Tailwind utilities
├── page/
│   ├── NotePage.tsx             # Note page
├── services/
│   ├── taskService.tsx          # Socket and API services
├── utils/
│   ├── socket.ts                # Handles socket
├── .env                         # Environment variables
├── App.tsx                      # Main app logic
├── main.tsx                     # Project entry file
└── package.json                 # Dependencies and scripts
```

### Backend Structure
```bash
├── config/
│   ├── dbConnection.ts          # Handles DB connection
│   ├── redisConnection.ts       # Handles Redis connection
├── controllers/
│   ├── taskController.ts        # Manages tasks-related actions
├── middlewares/
│   ├── errorMiddleware.ts       # Error handling
├── models/
│   ├── taskModel.ts             # Task schema
├── routes/
│   ├── taskRoutes.ts            # Task-related routes
├── utils/
│   ├── addtoStorage.ts          # Handles logic for data storage  
│   ├── catchAsyncError.ts       # Handles async errors
│   ├── ErrorHandler.ts          # Custom error handling class
├── .env                         # Environment variables
├── index.ts                     # Handles socket implementation
├── socket.ts                    # Entry point of the application
└── package.json                 # Dependencies and scripts
```

---

## Installation

### Frontend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbhishekOraonDev/fullstack_task_abhishek.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd client
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Create a `.env` file and add environment variables:**
   ```env
   VITE_BASE_URL=<YOUR_SERVER_URL>
   ```
5. **Start the development server:**
   ```sh
   npm run dev
   ```

### Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbhishekOraonDev/fullstack_task_abhishek.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd server
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Create a `.env` file and add environment variables:**
   ```env
   PORT=5000
   MONGO_URI=<YOUR_MONGO_URI>
   ORIGIN2=<YOUR_ORIGIN_URL>
   ORIGIN1=<YOUR_ORIGIN_URL>
   FULL_NAME=<YOUR_NAME>
   REDIS_USERNAME=<YOUR_REDIS_USERNAME>
   REDIS_PASSWORD=<YOUR_REDIS_PASSWORD>
   REDIS_URL=<YOUR_REDIS_URL>
   REDIS_PORT=<YOUR_REDIS_PORT>
   ```
5. **Start the development server:**
   ```sh
   npm run dev
   ```

---

## API Endpoints

### Task Routes
- **POST** `/createTask` - Create a new task
- **GET** `/fetchAllTasks` - Get all tasks

---

## Middlewares
- **Error Handling Middleware** - Captures and formats errors

---

## Docker Implementation

### Dockerizing Frontend

1. Find `Dockerfile` in the frontend directory:

2. Build and run the container:
   ```sh
   docker build -t task-frontend .
   docker run -p 5173:5173 task-frontend
   ```

### Dockerizing Backend

1. Find `Dockerfile` in the backend directory:

2. Build and run the container:
   ```sh
   docker build -t task-backend .
   docker run -p 5000:5000 task-backend
   ```

### Docker Compose (Optional)
Find the `docker-compose.yml` file at root, to run both services together:

Run the project:
```sh
docker-compose up --build
```

---

## Future Enhancements
1. Implement **user authentication**
2. Role-based access control (RBAC)
3. Assign tasks/notes to multiple users

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## Contact
For any queries or issues, reach out to **[Abhishek Oraon](https://github.com/AbhishekOraonDev)**.

**Happy Coding! 🚀**

