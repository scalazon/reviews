const { MongoClient } = require('mongodb');
// const { MONGO_USER, MONGO_PASS } = require('../config');

// const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@reviews-zpe0q.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

const uri = 'mongodb://localhost:27017/'

const databases = {};

function connect(url, database) {
  return MongoClient.connect(url, options).then(client => client.db(database));
}

async function initializeDatabases() {
  // const databases = await Promise.all([connect(uri)]);
  const reviews = await connect(
    uri,
    'Reviews'
  );
  databases.reviews = reviews;
}

function getReviewsDatabase() {
  console.log('Returning reviews connection object', databases.reviews)
  return databases.reviews;
}

module.exports = { initializeDatabases, getReviewsDatabase };
