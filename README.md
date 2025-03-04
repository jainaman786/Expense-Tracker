# Expense Tracker Backend - Node.js + MySQL

This is a simple Expense Tracker backend built with **Node.js**, **Express**, and **MySQL**.

## Project Structure

```
backend/
|-- app.js                // Main entry point
|-- db/
|   |-- db.js              // Database connection file
|-- routes/
|   |-- expenseRoutes.js   // API routes for expense
|-- controllers/
|   |-- expenseController.js // Logic for handling requests
|-- .env                    // Environment variables
|-- package.json
```

## Features
- Add expenses (amount, category, date, description)
- Fetch all expenses
- Filter expenses by category and date
- Fetch total expenses within a date range

## Technologies Used
- Node.js
- Express
- MySQL
- Docker (optional for MySQL setup)

## Requirements
- Node.js (v18+)
- MySQL (installed locally or via Docker)
- Postman (for API testing)

## Environment Variables
Create a `.env` file in the `backend/` folder with the following content:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=test
DB_NAME=expensetracker
DB_PORT=3307      # This is the port exposed by Docker container
PORT=3000
```

## MySQL Setup via Docker
To run MySQL in Docker, use the following command:

```sh
docker run --name sqldb -d -p 3307:3306 -v mysqldata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=test mysql:latest
```

### MySQL Table Creation
After starting MySQL, log in and create the database and table:

```sql
CREATE DATABASE expensetracker;

USE expensetracker;

CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    date DATE NOT NULL
);
```

## Installation

```sh
cd backend
npm install
```

## Start Server
```sh
npm start
```

## API Endpoints

### Add Expense
```http
POST /expenses
```
**Request Body:**
```json
{
    "amount": "500",
    "category": "Food",
    "description": "Dinner with friends",
    "date": "2025-03-04"
}
```

### Get All Expenses
```http
GET /expenses
```

### Filter Expenses
```http
GET /expenses?category=Food&date=2025-03-04
```

### Get Total Expenses for Date Range
```http
GET /expenses/total?start=2025-03-01&end=2025-03-04
```

## Test APIs
- Use **Postman** or **Thunder Client** to test the endpoints.

