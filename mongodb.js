const mongodb = require('mongodb');
const { MongoClient } = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connnct to database!');
  } 

  console.log('Connected to database!');
});
