const app = require('./app.js');
const { connect } = require('../database/mongodb');
const { PORT, HOST } = require('../config.js');

const port = PORT || 1337;
const host = HOST || '0.0.0.0';

connect(() => {
  app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
  });
});
