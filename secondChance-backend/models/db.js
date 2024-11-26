require('dotenv').config();
const { MongoClient } = require('mongodb');  // Destructure MongoClient correctly

// MongoDB connection URL with authentication options
const url = process.env.MONGO_URL;

let dbInstance = null;
const dbName = process.env.MONGO_DB;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;  // Return existing connection if already established
    }

    try {
        // Create a new MongoClient instance
        const client = new MongoClient(url);

        // Task 1: Connect to MongoDB
        await client.connect();  // Establish connection

        // Task 2: Connect to the specific database
        dbInstance = client.db(dbName);

        console.log("Connected successfully to the MongoDB server");

        // Task 3: Return the database instance
        return dbInstance;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
}

module.exports = connectToDatabase;
