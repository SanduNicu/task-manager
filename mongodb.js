const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connnct to database!');
  } 

  console.log('Connected to database!');
  const db = client.db(databaseName);
  db.collection('users').updateOne({
    _id: new ObjectID('5e2192f749baa03b0ef43aab')
  }, {
    $set: {
      name: 'Ali',
    }
  }).then((result) => {
    console.log(result);
  })
    .catch((err) => {
      console.log(err);
    })
});
