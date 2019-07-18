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
          <FontAwesomeIcon icon={farFaStar} className="amazon-color-scheme" />
        }
        fullSymbol={
          <FontAwesomeIcon icon={fasFaStar} className="amazon-color-scheme" />
        }
      />
    </>
  );
}

StarRating.propTypes = {
  overall: PropTypes.string.isRequired
};

export default StarRating;
