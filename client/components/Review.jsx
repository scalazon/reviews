import React from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewText from './ReviewText.jsx';
import ReviewDate from './ReviewDate.jsx';
import StarRating from './StarRating.jsx';

function Review(props) {
  const { review } = props;

  return (
    <div>
      <div className="row">
        <div className="col">
          <User reviewerName={review.reviewerName} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ReviewDate unixReviewTime={review.unixReviewTime} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-auto">
          <StarRating overall={review.overall} />
        </div>
        <div className="col-sm-9">
          <ReviewSummary summary={review.summary} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ReviewText reviewText={review.reviewText} />
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    reviewerName: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    unixReviewTime: PropTypes.number.isRequired,
    overall: PropTypes.number.isRequired
  }).isRequired
};

export default Review;
