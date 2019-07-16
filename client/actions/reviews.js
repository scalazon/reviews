const axios = require('axios');

function reviewsNotFound(bool) {
  return {
    type: 'REVIEWS_NOT_FOUND',
    notFound: bool
  };
}

function reviewsHasError(bool) {
  return {
    type: 'REVIEWS_HAS_ERROR',
    hasError: bool
  };
}

function reviewsIsLoading(bool) {
  return {
    type: 'REVIEWS_IS_LOADING',
    isLoading: bool
  };
}

// eslint-disable-next-line no-shadow
function reviews(reviews) {
  return {
    type: 'REVIEWS_GET_DATA_SUCCESS',
    reviews
  };
}

function reviewsGetData(asin) {
  return dispatch => {
    dispatch(reviewsIsLoading(true));
    axios
      .get(`http://reviews-dev.us-west-2.elasticbeanstalk.com/reviews/${asin}`)
      .then(response => {
        console.log(
          'Recieved the following data from GET to /reviews:',
          response.data
        );

        dispatch(reviews(response.data));
        dispatch(reviewsIsLoading(false));

        if (response.data.length === 0) {
          dispatch(reviewsNotFound(true));
        }
      })
      .catch(err => {
        dispatch(reviewsIsLoading(false));
        dispatch(reviewsHasError(true));
        throw new Error(err);
      });
  };
}

module.exports = {
  reviewsNotFound,
  reviewsIsLoading,
  reviews,
  reviewsHasError,
  reviewsGetData
};
