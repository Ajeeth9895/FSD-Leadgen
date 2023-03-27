const mongodb = require('mongodb')
const dbName = process.env.DB_NAME
const  dbUrl = `${process.env.DB_URL}/${dbName}`;
const MongoClient = mongodb.MongoClient;

module.exports = {mongodb,dbName,dbUrl,MongoClient};