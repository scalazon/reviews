const { getReviewsDatabase } = require('./mongodb.js');

const collectionName = 'Reviews';

function getReviews(asin) {
  return getReviewsDatabase()
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
