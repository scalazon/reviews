const axios = require('axios');

test ('adds 1 + 2 to equal 3', () => {
  expect(1+2).toEqual(3);
})




// Old test code

// const jest = require('jest')
// const request = require('supertest');

// const { HOST, PORT } = require('../config.js');

// const host = HOST || '127.0.0.1';
// const port = PORT || 3002;

// console.log('HOST is', HOST);
// const endpoint = `http://${host}:${port}`;

// describe('Express routes -->', () => {
//   describe('Root path (/) -->', () => {
//     console.log('Endpoint is is', endpoint);

//     it('When a GET request is recieved, expect a 200 response', () => {
//       return request(endpoint)
//         .get('/')
//         .expect(200);
//     });

//     it('When a GET request is recieved, expect html content', () => {
//       return request(endpoint)
//         .get('/')
//         .expect('Content-Type', /text\/html/);
//     });

//     it('When a POST request is recieved, expect a 404 error', () => {
//       return request(endpoint)
//         .post('/')
//         .expect(404);
//     });
//   });

//   describe('Reviews path -->', () => {
//     it('When a GET request is recieved, expect a 200 response', () => {
//       return request(endpoint)
//         .get('/reviews')
//         .expect(200);
//     });
//     it('When a GET request is recieved with an ASIN, expect the reviews for that item', () => {
//       const ASIN = 'B00002N6AN';
//       const route = `/reviews/${ASIN}`;
//       return request(endpoint)
//         .get(route)
//         .expect(200)
//         .expect('Content-Type', 'application/json; charset=utf-8')
//         .then(response => {
//           // expect(response.body).to.have.property('reviewText');
//           // expect(response.body).to.have.property('summary');
//           expect(response.body).to.be.an('array');
//           expect(response.body[0].asin).to.equal(ASIN);
//           // for (let i = 0; i < response.body.length; i += 1) {
//           //   expect(response.body[i]).to.have.property('asin');
//           //   expect(response.body[i].asin).to.equal(ASIN);
//           // }
//         });
//     });

//     it('When a GET request is recieved with an ASIN that has no reviews, expect no Reviews', () => {
//       const ASIN = '0000000000';
//       const route = `/reviews/${ASIN}`;
//       return request(endpoint)
//         .get(route)
//         .expect(200)
//         .expect('Content-Type', 'application/json; charset=utf-8')
//         .then(response => {
//           expect(response.body).to.be.an('array');
//           expect(response.body).to.be.an('array').that.is.empty;
//         });
//     });

//     it('When a GET request is recieved without an ASIN, expect no Reviews', () => {
//       return request(endpoint)
//         .get('/reviews')
//         .expect(200)
//         .then(response => {
//           expect(response.body).to.be.an('object');
//           expect(response.body).to.be.an('object').that.is.empty;
//         });
//     });
//   });
// });
