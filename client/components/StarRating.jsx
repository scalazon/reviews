import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import '../styles/scss/StarRating.scss';

function StarRating(props) {
  const { overall } = props;

  return (
    <>
      <Rating
        initialRating={overall}
        readonly
        emptySymbol="far fa-star amazon-color-scheme"
        fullSymbol="fas fa-star amazon-color-scheme"
      />
    </>
  );
}

StarRating.propTypes = {
  overall: PropTypes.string.isRequired
};

export default StarRating;
