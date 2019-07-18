import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar.jsx';

function ReviewOverview(props) {
  return (
    <div>
      <h5>{90} customer reviews</h5>
      <div>
        5 star <ProgressBar percentage={25} />
      </div>
      <div>
        4 star <ProgressBar percentage={25} />
      </div>
      <div>
        3 star <ProgressBar percentage={25} />
      </div>
      <div>
        2 star <ProgressBar percentage={25} />
      </div>
      <div>
        1 star <ProgressBar percentage={25} />
      </div>
    </div>
  );
}

export default ReviewOverview;
