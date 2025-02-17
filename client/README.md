# Todo Management Frontend (Kazam Assignment)

This is the frontend service for the Todo Management System, providing a user-friendly interface to manage tasks efficiently. The frontend is built using React.js with modern UI libraries.


## Table of contents

- [Project Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Future Enhancements](#future-enhancements)
- [Additional Features implementetion](#additional-features-implementetion)
- [Contact](#contact)



## Features
- Task creation
- Responsive UI for better user experience.
- Cached data for fast fetching 

## Technologies Used

- **React.js**: Frontend framework.
- **Axios**: API requests.
- **framer-motion**: UI motion effects.
- **socket.io-client**: Socket implementation for real time.
- **tailwind** - UI library used.
- **react-toastify** - Notification handler.


## Folder Structure

```bash
├── assets/                     # Handles user assets
├── component/
│   ├── AddNote.tsx              # Add note component
│   ├── NoteItem.tsx             # Note items component (Not using)
│   ├── NoteList.tsx             # Note list
├── lib/
│   ├──utils.ts                 # tailwind utils
├── page/
│   ├── NotePage.tsx            # Note page
├── services/
│   ├── taskService.tsx         # Socket and API services
├── ui/
├── utils/
│   ├── socket.ts               # handles socket
├── .env                        # Environment variables
├── App.tsx                     # App logic 
├── App.css                     # App css styles
├── index.css                   # Index css file
├── main.tsx                    # project main file
└── package.json                # Dependencies and scripts
```





## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AbhishekOraonDev/TaskManagement_Frontend.git
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
      VITE_BASE_URL=<YOUR_SERVER_URL>
   ```

5. **Start the development server:**
   ```sh
   npm run dev
   ```



## How to Use

1. Create new tasks by clicking the Add button


## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository

2. Create a new branch (`git checkout -b feature-branch`)

3. Commit your changes (`git commit -m "Add new feature"`)

4. Push to the branch (`git push origin feature-branch`)

5. Open a Pull Request


## Future Enhancements

1. Implement user authentication.

2. Implement of role-based access control (RBAC) for admin-level operations.

3. Add different notes operation.

4. Assign task/notes to multiple users.


 

## Contact
For any queries or issues, reach out to **[Abhishek Oraon](https://github.com/AbhishekOraonDev)**.

---
**Happy Coding! 🚀**



