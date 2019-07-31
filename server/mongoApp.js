const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dbfunctions = require('../database/mongoDB')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.use('/reviews', morgan('tiny'));

app.get('/reviews/:asin(\\w+)', cors(), (req, res) => {
  const { asin } = req.params;
  const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
  if (asin) {
    client.connect(function(err) {
      assert.equal(null, err);
      const db = client.db('sdc');
      dbfunctions.findProduct(db, asin, function(result) {
        group = result[0].reviewGroup
        dbfunctions.findReviews(db, group, function(result) {
          res.send(result)
          client.close()
        })
      })
    });
  } else {
    client.close
    res.send();
  }
});


app.get('/summaries/:asin(\\w+)', cors(), (req, res) => {
  const { asin } = req.params;
  const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
  if (asin) {
    client.connect(function(err) {
      assert.equal(null, err);
      const db = client.db('sdc');
      dbfunctions.findProduct(db, asin, function(result) {
        group = result[0].reviewGroup
        dbfunctions.findReviews(db, group, function(result) {
          res.send(result)
          client.close()
        })
      })
    });
  } else {
    client.close
    res.send();
  }
  
});



module.exports = app;
