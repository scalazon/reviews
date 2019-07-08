const { MongoClient } = require('mongodb');
// const assert = require('assert');
const { MONGO_USER, MONGO_PASS } = require('../config');

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@reviews-zpe0q.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

const dbName = 'Reviews';
const collectionName = 'Reviews';

function getReviews() {
  return MongoClient.connect(uri, options)
    .then(connection => {
      return connection
        .db(dbName)
        .collection(collectionName)
        .findOne({ overall: { $lt: 2 } });
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.error(err);
    });
}

// client.connect(err => {
//   assert.equal(null, err);
//   // const collection = client.db(dbName).collection(collectionName);

//   console.log('Connected Successfuly to', dbName);
//   client.close();
// });

module.exports = {
  getReviews
};
