const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { getReviews } = require('../database/db');

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

  if (asin) {
    getReviews(asin)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    res.send();
  }
});

app.get('/reviews', (req, res) => {
  res.send();
});

module.exports = app;
