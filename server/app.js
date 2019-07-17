const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { getReviews } = require('../database/reviews');
const { currentASINs, updateOneASIN } = require('../database/summaries');

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

app.get('/summaries', (req, res) => {
  currentASINs()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.send();
    });
});

app.get('/summaries/updateOne', (req, res) => {
  updateOneASIN()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.send();
    });
});

module.exports = app;
