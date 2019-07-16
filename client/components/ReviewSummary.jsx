import React from 'react';
import '../styles/scss/ReviewSummary.scss';
import PropTypes from 'prop-types';

function ReviewSummary(props) {
  const { summary } = props;
  return <div className="bold">{summary}</div>;
}

ReviewSummary.propTypes = {
  summary: PropTypes.string.isRequired
};

export default ReviewSummary;
