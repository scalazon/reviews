/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { reviewsGetData } from '../actions/reviews';

class App extends React.Component {
  componentDidMount() {
    const { getReviews } = this.props;

    getReviews(`B00002N8K3`);
  }

  render() {
    const {
      reviews,
      reviewsHasError,
      reviewsIsLoading,
      reviewsNotFound
    } = this.props;

    if (reviewsNotFound) {
      return (
        <div className="container">
          <div className="row h2">Reviews</div>
        </div>
      );
    }

    if (reviewsIsLoading) {
      return (
        <div className="container">
          <div className="row h2">Reviews</div>
          <div className="row h4">Loading...</div>
        </div>
      );
    }

    if (reviewsHasError) {
      return (
        <div className="container">
          <div className="row h2">Reviews</div>
          <div className="row h4">There was an Error...</div>
        </div>
      );
    }

    // TODO: Refactor the conditional to be correct for a review list
    if (reviews.length > 0) {
      const firstReview = reviews[0];
      return (
        <div className="container">
          <div className="row h2">Reviews</div>
          <div className="row h4">{firstReview.summary}</div>
          <div className="row">{firstReview.reviewText}</div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row h2">Reviews</div>
      </div>
    );
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

const mapDispatchToProps = dispatch => {
  return { getReviews: asin => dispatch(reviewsGetData(asin)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
