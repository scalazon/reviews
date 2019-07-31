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
  text: PropTypes.string.isRequired
};

export default ReviewText;
