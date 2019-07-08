const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const { getReviews } = require('../database/db');

const app = express();

app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get('/reviews', (req, res) => {
  getReviews().then(result => {
    res.send(result);
  });
});

module.exports = app;
