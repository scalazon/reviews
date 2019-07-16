const { MongoClient } = require('mongodb');
const { MONGO_USER, MONGO_PASS } = require('../config');
const { get } = require('./mongodb.js');

// const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@reviews-zpe0q.mongodb.net/test?retryWrites=true&w=majority`;
// const options = {
//   useNewUrlParser: true
// };

// const dbName = 'Reviews';

const collectionName = 'Reviews';
const reviews = get();

console.log(reviews);

function getReviews(asin) {
  return reviews
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
