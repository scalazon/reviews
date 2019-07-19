import React from 'react';
import ProgressBar from './ProgressBar.jsx';
import PropTypes from 'prop-types';
import '../styles/scss/ReviewBreakdown.scss';

function ReviewBreakdown(props) {
  const { summary } = props;
  const { reviewBreakdown, reviewCount } = summary;

  const progressBars = reviewBreakdown.map((count, index) => {
    const percentage = (count / reviewCount) * 100;

    return (
      <div className="row mb-1">
        <div className="col-2 breakdown-text text-nowrap">{index + 1} star</div>
        <div className="col-8">
          <ProgressBar percentage={percentage} />
        </div>
        <div className="col-2 breakdown-text">{percentage}%</div>
      </div>
    );
  });

  progressBars.reverse();
  return <>{progressBars}</>;
}

ReviewBreakdown.propTypes = {
  summary: PropTypes.shape({
    reviewBreakdown: PropTypes.array.isRequired,
    reviewCount: PropTypes.number.isRequired
  }).isRequired
};

export default ReviewBreakdown;
