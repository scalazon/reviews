function reviewsHasError(state = false, action) {
  switch (action.type) {
    case 'REVIEWS_HAS_ERROR':
      return action.hasError;
    default:
      return state;
  }
}

function reviewsNotFound(state = false, action) {
  switch (action.type) {
    case 'REVIEWS_NOT_FOUND':
      return action.notFound;
    default:
      return state;
  }
}

function reviewsIsLoading(state = false, action) {
  switch (action.type) {
    case 'REVIEWS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

function reviews(state = [], action) {
  switch (action.type) {
    case 'REVIEWS_GET_DATA_SUCCESS':
      return action.reviews;
    default:
      return state;
  }
}

module.exports = {
  reviewsHasError,
  reviewsIsLoading,
  reviewsNotFound,
  reviews
};
