# Todo Management Backend (Kazam Assignment)

This is the backend service for the **Todo Management System**, designed to handle user notes creation and tracking. The backend is built using **Node.js, Express, Socket.io, Redis and MongoDB**.


## Table of contents

- [Project Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Middlewares](#middlewares)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)



## Features
- Add notes name 
- API endpoints for managing notes
- Secure RESTful API with proper validation
- Real time implementation using socket.io
- Caching data using redis


## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building the API.
- **MongoDB**: Database for storing users and reminders.
- **Mongoose**: ODM for MongoDB.
- **Socket.io** - Real time implementation
- **Redis** - Cache implementation


## Folder Structure

```bash
├── config/
│   ├── dbConnection.ts         # Handles DB connection
│   ├── redisConnection.ts      # Handles Redis connection
├── controllers/
│   ├── taskController.ts       # Manages notes-related actions
├── middlewares/
│   ├── errorMiddleware.ts      # Handles error
├── models/
│   ├── taskModel.ts            # task schema
├── routes/
│   ├── taskRoutes.ts           # task-related routes
├── utils/
│   ├── addtoStorage.ts         # Handles logic for data storage  
│   ├── catchAsyncError.ts      # Handles async errors 
│   ├── ErrorHandler.ts         # Custom error handling class
├── .env                        # Environment variables
├── index.ts                    # handles socket implementation
├── socket.ts                    # Entry point of the application
└── package.json                # Dependencies and scripts
```





## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbhishekOraonDev/TaskManagement_Backend.git
   ```

2. **Navigate to the project directory:**
   ```sh
   cd <folder_name_if_exists> 
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

## API Endpoints

### Task Routes
- **POST** `/createTask` - Create a new notes
- **GET** `/fetchAllTasks` - Get all tasks



## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request


## Middlewares

1. Error Handling Middleware:
    - Captures and formats all errors.




## Future Enhancements

1. Implementation user authentication.

2. Implementation of role-based access control (RBAC) for admin-level operations.

3. Add different notes operation.

4. Assign task/notes to multiple users.


 

## Contact
For any queries or issues, reach out to **[Abhishek Oraon](https://github.com/AbhishekOraonDev)**.

---
**Happy Coding! 🚀**

