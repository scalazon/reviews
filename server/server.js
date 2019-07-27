const app = require('./app.js');
// const { initializeDatabases } = require('../database/mongodb.js');

const { PORT, HOST } = require('../config.js');

const port = PORT || 1337;
const host = HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});


// initializeDatabases().then(() => {
//   app.listen(port, host, () => {
//     console.log(`Running on http://${host}:${port}`);
//   });
// });
