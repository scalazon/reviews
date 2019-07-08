const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT, HOST } = require('../config.js');
const { getReviews } = require('../database/db');

const app = express();

const port = PORT || 1337;
const host = HOST || '0.0.0.0';

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

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});
