/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { reviewsGetData } from '../actions/reviews';
import '../styles/scss/App.scss';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  componentDidMount() {
    const { getReviews } = this.props;

    // Has to be 'product-change' for other components to broadcast
    const bc = new BroadcastChannel('product-change');
    bc.onmessage = ev => getReviews(ev.data);

    // getReviews(`B077L6KSGM`);
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
          <div className="row h4">No reviews for this product...</div>
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
      return (
        <div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-sm-3">ReviewSummary</div>
              <div className="col-sm-9">
                <ReviewList />
              </div>
            </div>
          </div>
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
