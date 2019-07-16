import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/scss/ReviewDate.scss';

function ReviewDate(props) {
  const { unixReviewTime } = props;

  const date = moment.unix(unixReviewTime).format('MMMM Do YYYY');

  return (
    <div className="row">
      <div className="col review-date">{date}</div>
    </div>
  );
}

ReviewDate.propTypes = {
  unixReviewTime: PropTypes.number.isRequired
};

export default ReviewDate;
