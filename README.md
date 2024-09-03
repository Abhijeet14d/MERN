# MERN To-Do List App

## Overview
This is a simple To-Do List application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to create, read, update, and delete tasks.

## Features
- Add new tasks
- View all tasks
- Update existing tasks
- Delete tasks

## Technologies Used
- **MongoDB**: Database to store tasks
- **Express.js**: Backend framework to handle API requests
- **React**: Frontend library to build the user interface
- **Node.js**: JavaScript runtime for the backend server

## Installation

### Prerequisites
- Node.js
- MongoDB

### Steps
1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/mern-todo-app.git
    cd mern-todo-app
    ```

2. **Install backend dependencies**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**
    - Create a `.env` file in the `backend` directory and add the following:
        ```
        MONGO_URI=your_mongodb_connection_string
        PORT=5000
        ```

5. **Run the backend server**
    ```bash
    cd backend
    npm start
    ```

6. **Run the frontend server**
    ```bash
    cd ../frontend
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. You can now add, view, update, and delete tasks.

## Folder Structure




## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
