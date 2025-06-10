// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}`
let filename = `${__dirname}/utils/gifts.json`;
const dbName = process.env.MONGODB_DATABASE
const collectionName = 'gifts';
let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      
    try {
        // Connect to the MongoDB client
        await client.connect();
        console.log("Connected successfully to server");
        const dbInstance= client.db(dbName);
        return dbInstance
    }
    catch (e){
        console.error(e);
    }
}

module.exports = connectToDatabase;