const { expect } = require('chai');
const request = require('supertest');

const { HOST, PORT } = require('../config.js');

const host = HOST || '127.0.0.1';
const port = PORT || 3002;

console.log('HOST is', HOST);
const endpoint = `http://${host}:${port}`;

describe('Express routes -->', () => {
  describe('Root path (/) -->', () => {
    console.log('Endpoint is is', endpoint);

    it('When a GET request is recieved, expect a 200 response', () => {
      return request(endpoint)
        .get('/')
        .expect(200);
    });

    it('When a GET request is recieved, expect html content', () => {
      return request(endpoint)
        .get('/')
        .expect('Content-Type', /text\/html/);
    });

    it('When a POST request is recieved, expect a 404 error', () => {
      return request(endpoint)
        .post('/')
        .expect(404);
    });
  });

  describe('Reviews path -->', () => {
    it('When a GET request is recieved, expect a 200 response', () => {
      return request(endpoint)
        .get('/reviews')
        .expect(200);
    });
    it('When a GET request is recieved, expect a Review object', () => {
      return request(endpoint)
        .get('/reviews')
        .then(response => {
          expect(response.body).to.have.property('reviewText');
          expect(response.body).to.have.property('summary');
          expect(response.body).to.have.property('asin');
        });
    });
    it('When a POST request is recieved, expect a 201 status', () => {
      return request(endpoint)
        .post('/reviews')
        .expect(201);
    });
  });
});
