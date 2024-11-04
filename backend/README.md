# Backend for Project Name

This is the backend for *Blockfuse Labs* website.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Folder Descriptions](#folder-descriptions)

---

## Project Structure

```plaintext
├── controllers/          # for handling requests and responses
├── models/               # database models representing tables
├── routes/               # route definitions
├── middlewares/          # middleware functions (e.g., auth middleware, error handling)
├── config/               # database configuration file
├── utils/                # helper functions
```

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

* **Node.js** (>= v18)
* **npm** (>= v6)
* **SQL Database** (MySQL)

### Step 1: Clone the Repository

```bash
git clone https://github.com/blockfuselabs/website.git
cd website/backend
```

### Step 2: Install Dependencies
Install the necessary Node.js packages:

```bash
npm install
```

### Step 3: Environment Variables & Database Setup
- Copy .env.sample file and rename the copied one to .env.
- Edit the .env file and change the database credentials.
- Edit *config/config.json* and change the database credentials.

### Step 4: Run Database Migrations
Run database migrations:

```bash
npx sequelize-cli db:migrate
```

### Step 5: Run Seeds
Commit seeded data to the database:

```bash
npx sequelize-cli db:seed:all
```

### Step 6: Start the Server
Run the below command to start the server:

```bash
npm start
```

The server should be running at http://localhost:5000.


## Folder Descriptions
* **controllers/**: Contains logic for handling API requests and sending responses. Each controller manages a single entity (e.g., userController.js for user related logics).
* **models/**: Represents database tables and defines schema, relationships, and ORM logics (e.g., userModel.js, articleModel.js).
* **routes/**: Defines the API routes for each resource. Each route file maps routes to controller actions (e.g., userRoutes.js => userController.js).
* **middlewares/**: Contains middleware functions for handling request lifecycle tasks (e.g., authMiddleware.js for authentication, errorHandler.js for error handling).
* **config/**: Configuration files, like db.js for database connection setup.
* **utils/**: Utility functions that are used across the application.