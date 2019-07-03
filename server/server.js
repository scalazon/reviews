const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('../config.js');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.listen(port, () => {
  console.log(`Express server is listening at ${port}`);
});
