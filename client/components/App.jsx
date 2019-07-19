/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { reviewsGetData } from '../actions/reviews';
import { summaryGetData } from '../actions/summary';
import '../styles/scss/App.scss';
import ReviewList from './ReviewList.jsx';
import ReviewOverview from './ReviewOverview.jsx';

class App extends React.Component {
  componentDidMount() {
    const { getReviews, getSummary } = this.props;

    // Has to be 'product-change' for other components to broadcast
    const bc = new BroadcastChannel('product-change');
    bc.onmessage = ev => {
      getSummary(ev.data);
      getReviews(ev.data);
    };

    // Default item for demo purposes
    getSummary(`B01D1NMLJU`);
    getReviews(`B01D1NMLJU`);
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

    if (reviews.length > 0) {
      return (
        <div>
          <hr />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 mb-4">
                <ReviewOverview />
              </div>
              <hr />
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
  return {
    getReviews: asin => dispatch(reviewsGetData(asin)),
    getSummary: asin => dispatch(summaryGetData(asin))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
