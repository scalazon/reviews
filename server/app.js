const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { getReviews } = require('../database/reviews');
const {
  findReviewsforInvalidASIN,
  currentASINs,
  findAndUpdateReviewsforInvalidASIN,
  unassignedValidASINs,
  updateOneASIN,
  bulkUpdateASINs
} = require('../database/asins');

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

/* ASIN ROUTES */

// app.get('/asins', (req, res) => {
//   currentASINs()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.error(err);
//       res.send();
//     });
// });

// app.get('/asins/updateAll', (req, res) => {
//   bulkUpdateASINs()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.error(err);
//       res.send();
//     });
// });

// app.get('/asins/updateOne', (req, res) => {
//   findAndUpdateReviewsforInvalidASIN()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.error(err);
//       res.send();
//     });
// });

// app.get('/asins/oneInvalid', (req, res) => {
//   findReviewsforInvalidASIN()
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.error(err);
//       res.send();
//     });
// });

module.exports = app;
