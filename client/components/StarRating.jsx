import React from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import '../styles/scss/StarRating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons/faStar';

function StarRating(props) {
  const { overall } = props;

  return (
    <>
      <Rating
        initialRating={overall}
        readonly
        emptySymbol={
          <FontAwesomeIcon icon={farFaStar} className="star-color-scheme" />
        }
        fullSymbol={
          <FontAwesomeIcon icon={fasFaStar} className="star-color-scheme" />
        }
      />
    </>
  );
}

StarRating.propTypes = {
  overall: PropTypes.number.isRequired
};

export default StarRating;
