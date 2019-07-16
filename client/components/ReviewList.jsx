/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import { uuid4 } from 'uuid/v4';
import { connect } from 'react-redux';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  render() {
    const {
      reviews,
      reviewsHasError,
      reviewsIsLoading,
      reviewsNotFound
    } = this.props;

    const reviewsToDisplay = reviews.map(review => {
      // eslint-disable-next-line no-underscore-dangle
      return <Review review={review} key={review._id} />;
    });

    return <div>{reviewsToDisplay}</div>;
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    reviewsHasError: state.reviewsHasError,
    reviewsIsLoading: state.reviewsIsLoading,
    reviewsNotFound: state.reviewsNotFound
  };
};

export default connect(
  mapStateToProps,
  null
)(ReviewList);
