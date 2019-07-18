import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar.jsx';
import '../styles/scss/ReviewOverview.scss';

function ReviewOverview(props) {
  return (
    <div className="row">
      <h5 className="col-12">{90} customer reviews</h5>
      <div className="col-12">
        <div className="row">
          <div className="col-2 overview-text">5 star</div>
          <div className="col-8">
            <ProgressBar percentage={25} />
          </div>
          <div className="col-2 overview-text">25%</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewOverview;
