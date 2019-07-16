import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
// needed for bundle, requiring it here
import userIcon from '../images/userIcon.jpeg';

function User(props) {
  const { reviewerName } = props;

  return (
    <div className="row">
      <div className="col-2">
        <img
          className=""
          src="http://reviews-dev.us-west-2.elasticbeanstalk.com/client/images/userIcon.jpeg"
          alt="userIcon"
        />
      </div>
      <div className="col-10">{reviewerName}</div>
    </div>
  );
}

User.propTypes = {
  reviewerName: PropTypes.string.isRequired
};

export default User;
