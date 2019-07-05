const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT, HOST } = require('../config.js');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';
app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});