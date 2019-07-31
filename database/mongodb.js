module.exports.findProduct = function(db, productID, callback) {
  // Get the documents collection
  const collection = db.collection('products');
  // Find some documents
  collection.find({'_id': productID).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

module.exports.findReviews = function(db, reviewGroup, callback) {
  // Get the documents collection
  const collection = db.collection('reviews');
  // Find some documents
  collection.find({'reviewGroup': reviewGroup}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}
