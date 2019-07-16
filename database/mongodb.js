const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASS } = require('../config');

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@reviews-zpe0q.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

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
  return databases.reviews;
}

module.exports = { initializeDatabases, getReviewsDatabase };
