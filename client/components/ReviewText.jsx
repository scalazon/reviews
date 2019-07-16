import React from 'react';
import PropTypes from 'prop-types';

function ReviewText(props) {
  const { reviewText } = props;
  return (
    <div>
      <p>{reviewText}</p>
    </div>
  );
}

ReviewText.propTypes = {
  reviewText: PropTypes.string.isRequired
};

export default ReviewText;
