const { MongoClient } = require('mongodb');

const options = {
  useNewUrlParser: true
};

const uri = 'mongodb://localhost:27017/'

// MongoClient.connect(uri, options, function(err, db) {
//   if (err) throw err;
//   var database = db.db("Reviews");
//   database.collection("reviews").insert({'name':'garrettwelson'}, function(err, res) {
//     if (err) throw err;
//     console.log("inserted")
//     db.close()
//   })
//   // database.createCollection("reviews", function(err, res) {
//   //   if (err) throw err;
//   //   console.log("Collection created!");
//   //   db.close();
//   // });
// });



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
