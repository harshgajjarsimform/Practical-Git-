# MERN Project - Backend Documentation

## Overview
This is the backend part of the MERN (MongoDB, Express, React, Node.js) project. The server is built using Node.js and Express, providing a RESTful API for the frontend React application.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the server directory:
   ```
   cd mern-project/server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Environment Variables
Create a `.env` file in the `server` directory based on the `.env.example` provided. Ensure to set the following variables:
- `PORT`: The port on which the server will run (default is 5000).
- `MONGODB_URI`: The connection string for your MongoDB database.

### Running the Server
To start the server, run:
```
npm start
```
The server will be running on `http://localhost:5000`.

### API Endpoints
The following endpoints are available:
- `GET /api/users`: Retrieve all users.
- `POST /api/users`: Create a new user.
- Additional user-related endpoints can be found in the `routes/api/users.js` file.

### Folder Structure
- `src/config`: Configuration files, including database connection.
- `src/controllers`: Contains controller functions for handling requests.
- `src/middleware`: Middleware functions for authentication and error handling.
- `src/models`: Mongoose models for the database.
- `src/routes`: API routes for the application.
- `src/utils`: Utility functions for backend operations.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

