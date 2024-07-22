# Expense Tracker

An expense tracking platform built with the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Expense Tracker is a web application that helps users track their expenses. It allows users to add, view, edit, and delete expenses, and provides a summary of their spending.

## Features

- Add, view, edit, and delete expenses
- Expense categorization
- Monthly and yearly expense summary
- Responsive design

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/mrakshaydighe/Expense_Tracker_App_MERN.git
    cd Expense_Tracker_App_MERN
    ```

2. Install backend dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

### Frontend Setup

1. Navigate to the client directory:
    ```sh
    cd client
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the client directory and add any necessary environment variables (if any).

4. Start the frontend development server:
    ```sh
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Start tracking your expenses!

## API Endpoints

### User Authentication
- `POST /api/v1/users/login` - Log in a user
- `POST /api/v1/users/register` - Register a new user

### Transactions
- `POST /api/v1/transections/add-transection` - Add a new transaction
- `POST /api/v1/transections/edit-transection` - Edit a transaction
- `POST /api/v1/transections/delete-transection` - Delete a transaction
- `POST /api/v1/transections/get-transection` - Get all transactions

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
