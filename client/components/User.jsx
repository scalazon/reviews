import React from 'react';
import PropTypes from 'prop-types';
import userIcon from '../images/defaultUser.jpeg';

function User(props) {
  const { reviewerName } = props;

  return (
    <div className="row">
      <div className="col-1">
        <img className="" src={userIcon} alt="userIcon" />
      </div>
      <div className="col-11">{reviewerName}</div>
    </div>
  );
}

User.propTypes = {
  reviewerName: PropTypes.string.isRequired
};

export default User;
