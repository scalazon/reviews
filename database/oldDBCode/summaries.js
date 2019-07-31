const { getReviewsDatabase } = require('./mongodb.js');
const { validASINs } = require('./asins.js');

const sample = validASINs[0];

async function upsertSummary(asin = sample) {
  const record = await getReviewsDatabase()
    .collection('Reviews')
    .find({ asin: { $eq: asin } })
    .toArray()
    .then(reviews => {
      const summary = {
        asin: null,
        overall: 0,
        reviewCount: 0,
        reviewBreakdown: [0, 0, 0, 0, 0]
      };
      reviews.forEach(review => {
        if (!summary.asin) {
          summary.asin = review.asin;
        }
        summary.overall =
          (summary.overall * summary.reviewCount + review.overall) /
          (summary.reviewCount + 1);
        summary.reviewCount += 1;
        summary.reviewBreakdown[review.overall - 1] += 1;
      });
      return summary;
    });

  console.log('Record before attempting write:', record);

  return getReviewsDatabase()
    .collection('Summaries')
    .updateOne(
      { asin: record.asin },
      {
        $set: {
          asin: record.asin,
          overall: record.overall,
          reviewCount: record.reviewCount,
          reviewBreakdown: record.reviewBreakdown
        }
      },
      { upsert: true }
    );
}

async function updateSummaries() {
  const updated = [];

  for (let i = 0; i < validASINs.length; i += 1) {
    updated.push(upsertSummary(validASINs[i]));
  }

  const result = await Promise.all(updated);

  return result.length.toString();
}

function getSummaries() {
  return getReviewsDatabase()
    .collection('Summaries')
    .find()
    .toArray();
}

function getSummary(asin) {
  return getReviewsDatabase()
    .collection('Summaries')
    .findOne({ asin: { $eq: asin } });
}

module.exports = {
  updateSummaries,
  getSummaries,
  getSummary
};
