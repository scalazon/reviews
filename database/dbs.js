const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASS } = require('../config');
const { reviewsConnection } = require('./index');

// const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@reviews-zpe0q.mongodb.net/test?retryWrites=true&w=majority`;
// const options = {
//   useNewUrlParser: true
// };

// const dbName = 'Reviews';

const collectionName = 'Reviews';

function getReviews(asin) {
  return reviewsConnection
    .collection(collectionName)
    .find({ asin: { $eq: asin } })
    .toArray()
    .then(result => {
      return result;
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
  getReviews
};
