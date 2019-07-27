const request = require('supertest');
const app = require('../server/app.js');

test ('reviews path sends back an empty response', async done => {
   request(app)
    .get('/reviews')
    .expect(200, done)
})

test ('reviews path to specific ASIN sends back an array of review objects', async done => {
  request(app)
    .get('/reviews/B01D1NMLJU')
    .expect(200)
    .then(response => {
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body[1]).toHaveProperty('asin')
      expect(response.body[2]).toHaveProperty('unixReviewTime')
      done()
    })
})

test ('summaries path sends back an array of summary objects', async done => {
  request(app)
    .get('/summaries')
    .expect(200)
    .then(response => {
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body.length).toBeGreaterThan(95)
      done()
    })
})

test ('individual summary path return one object', async done => {
  request(app)
    .get('/summaries/B00GN92MM6')
    .expect(200)
    .then(response => {
      expect(typeof response).toBe('object')
      expect(response.body).toMatchObject({
        asin: expect.any(String),
        overall: expect.any(Number),
        reviewBreakdown: expect.any(Array)
      })
      done()
    })
})


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
