//cluster running locally at 127.0.0.1:9042
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints: ['127.0.0.1:9042'], localDataCenter: 'datacenter1', keyspace: 'reviews'});

const query = 'SELECT * FROM testData';

client.execute(query)
  .then(result => console.log(result.rows[0]))
  .then(() => client.shutdown())