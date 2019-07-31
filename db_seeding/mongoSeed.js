const MongoClient = require('mongodb').MongoClient;
const faker = require('faker');
const assert = require('assert');


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'sdc';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertProducts(db, function() {
    insertReviews(db, function() {
      client.close();
    })
  })
});


const insertReviews = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('reviews');
  // Insert some documents
  

  const batch = [];
  for (let reviewGroup = 1; reviewGroup < 100; reviewGroup++) {
    let reviewCount = faker.random.number({min:1, max: 20})
    for (let i = 1; i < reviewCount; i++) {
      batch.push({
        reviewGroup: reviewGroup,
        reviewerID: faker.random.alphaNumeric(8),
        reviewerName: faker.name.findName(),
        helpful: [faker.random.number(99), faker.random.number(99)],
        text: `My ${faker.commerce.productName()} was ${faker.commerce.productAdjective()} and made of ${faker.commerce.productMaterial()}`,
        overall: faker.random.number(5),
        summary: faker.random.words(4),
        UNIX: faker.random.number({max:1564418741}),
      })
    }
  }
  collection.insertMany(batch, function(err,result) {
    if (err) {throw err};
    callback(result)
  })
 
}

const insertProducts = function(db, callback) {

  const collection = db.collection('products');
  let counter = 1;
  let operations = [];

  for (let i = 1; i < 5001; i++) {
    let products = []
    for (let j = 1; j < 2001; j++) {
      products.push({
        _id: counter,
        reviewGroup: faker.random.number({min:1, max:99})
      })
      counter++
    }
    operations.push(collection.insertMany(products))
  }
  Promise.all(operations).then(result => callback(result))

}