const faker = require('faker');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = require('csv-write-stream')
const writer = csvWriter({sendHeaders: true, headers: ["asin", "reviewerID", "reviewerName", "helpful", "text", "overall", "summary", "UNIX", "time"]})
const fs = require('fs');

/*
      "_id": "5d20f7c9100f12f17dee37df",
      "reviewerID": "A3AYF9CD4PXDJR",
      "asin": "B01D1NMLJU",
      "reviewerName": "E. Orchard \"I love lamp\"",
      "helpful": [
          11,
          13
      ],
      "reviewText": "You can't beat the price for this kit and it's so easy to start seeds. I used this for the first time last year and followed planting and disk instructions and had over a 75% germination rate! Between the cost and ease-of-use, this is a great way to start seeds for outdoors. Just keep the little pellets moist and you'll be good to go.Some seeds need dark to germinate, so make sure to read your seed packets!",
      "overall": 5,
      "summary": "Great success!",
      "unixReviewTime": 1262044800,
      "reviewTime": "12 29, 2009"
  }
*/

// const csvWriter = createCsvWriter({
//   path: './db_seeding/reviewData.csv',
//   header: [
//       {id: 'asin', title: 'ASIN'},
//       {id: 'reviewerID', title: 'REVIEWER_ID'},
//       {id: 'reviewerName', title: 'REVIEWER_NAME'},
//       {id: 'helpful', title: 'HELPFUL'},
//       {id: 'text', title: 'REVIEW_TEXT'},
//       {id: 'overall', title: 'OVERALL'},
//       {id: 'summary', title: 'REVIEW_SUMMARY'},
//       {id: 'UNIX', title: 'UNIX_TIME'},
//       {id: 'time', title: 'REVIEW_TIME'},
//   ]
// });

//const data = [];
writer.pipe(fs.createWriteStream('./db_seeding/reviewData2.csv',{flags: 'a'}));

for (let i = 0; i <   ; i++) {
  reviewCount = faker.random.number(5)
  for (let j = 0; j < reviewCount; j++) {
    writer.write({
      asin: i,
      reviewerID: faker.random.alphaNumeric(8),
      reviewerName: faker.name.findName(),
      helpful: faker.helpers.replaceSymbolWithNumber('##,##'),
      text: `My ${faker.commerce.productName()} was ${faker.commerce.productAdjective()} and made of ${faker.commerce.productMaterial()}`,
      overall: faker.random.number(5),
      summary: faker.random.words(4),
      UNIX: faker.random.number({max:1564418741}),
    })
  }
}

writer.end()

//csvWriter.writeRecords(data)

