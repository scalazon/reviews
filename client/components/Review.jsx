import React from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';
import ReviewSummary from './ReviewSummary.jsx';

function Review(props) {
  const { review } = props;

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <User reviewerName={review.reviewerName} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ReviewSummary />
        </div>
      </div>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    reviewerName: PropTypes.string.isRequired
  }).isRequired
};

export default Review;
