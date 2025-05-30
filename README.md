[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19654792&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 

# 🗄️ Week 1: MongoDB – Data Layer Fundamentals and Advanced Techniques

## 🚀 Objective
This repository contains the solution for the MongoDB Week 1 assignment, focusing on database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## 📂 Files Included

* `insert_books.js`: A Node.js script used to populate the `plp_bookstore` database with sample book data.
* `queries.js`: A MongoDB Shell script containing all the required queries, aggregation pipelines, and indexing commands for the assignment tasks.
* `README.md`: This file, explaining the setup and how to run the scripts.
* `mongodb_compass_screenshot.png` (or similar name): A screenshot demonstrating the populated `books` collection in MongoDB Compass.

## 🛠️ Setup and How to Run

### Prerequisites:

1.  **MongoDB Server:** Ensure you have a MongoDB Community Edition server running locally on `localhost:27017` OR have set up a free MongoDB Atlas cluster and have its connection string.
2.  **Node.js and npm:** Required to run `insert_books.js`.
3.  **MongoDB Shell (`mongosh`):** Required to run `queries.js`.
4.  **MongoDB Compass:** Used for visual verification and the screenshot.

### Steps to Run:

1.  **Clone this repository:**
    ```bash
    git clone <your_repository_url>
    cd <your_repository_name>
    ```

2.  **Install Node.js dependencies for `insert_books.js`:**
    ```bash
    npm install mongodb
    ```

3.  **Populate the Database:**
    * **If using a local MongoDB server:**
        ```bash
        node insert_books.js
        ```
    * **If using MongoDB Atlas:**
        * Open `insert_books.js` and update the `uri` variable at the top with your Atlas connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`).
        * Then run: `node insert_books.js`

    This script will create the `plp_bookstore` database and `books` collection, dropping existing documents if any, and then inserting the sample data.

4.  **Execute the MongoDB Queries:**
    * **If using a local MongoDB server:**
        ```bash
        mongosh < queries.js
        ```
   
    This script will run all the CRUD, advanced queries, aggregation pipelines, and indexing commands as specified in the assignment. The output will be printed to your terminal.

5.  **Verify with MongoDB Compass:**
    * Open MongoDB Compass and connect to your local or Atlas MongoDB instance.
    * Navigate to the `plp_bookstore` database and the `books` collection to visually verify the data and confirm operations.

---
