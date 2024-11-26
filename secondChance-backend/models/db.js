// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = `${process.env.MONGO_DB}`;

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    try{
        const client = MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true });

        // Task 2: Connect to database giftDB and store in variable dbInstance
        await client.connect();

        // Task 3: Connect to the secondChance database and store it in variable dbInstance
        dbInstance = client.db(dbName);

      // Task 4: Return database instance
        return dbInstance;
    }

    catch(err){
        console.error("Error connecting to MongoDB", err);
        throw err;
    }
}

module.exports = connectToDatabase;
