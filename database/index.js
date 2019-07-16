const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASS } = require('../config');

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@reviews-zpe0q.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

function connect(url, dbName) {
  return MongoClient.connect(url, options)
    .then(client => client.db(dbName))
    .catch(err => {
      console.error('Failed to make all database connections!');
      console.error(err);
      // Uncomment line below for server to not run without this connection
      // process.exit(1);
    });
}

async function initializeDatabases() {
  const databases = await Promise.all([
    connect(
      uri,
      `Reviews`
    )
  ]);

  return {
    reviewsConnection: databases[0]
  };
}

module.exports = initializeDatabases();
