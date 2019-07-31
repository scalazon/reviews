const assert = require('assert')

module.exports.findProduct = function(db, productID, callback) {
  // Get the documents collection
  const collection = db.collection('products');
  // Find some documents
  collection.find({'_id': Number(productID)}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}

module.exports.findReviews = function(db, reviewGroup, callback) {
  // Get the documents collection
  const collection = db.collection('reviews');
  // Find some documents
  collection.find({'reviewGroup': reviewGroup}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}
