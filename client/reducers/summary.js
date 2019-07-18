function summaryNotFound(state = false, action) {
  switch (action.type) {
    case 'SUMMARY_NOT_FOUND':
      return action.notFound;
    default:
      return state;
  }
}

function summaryIsLoading(state = false, action) {
  switch (action.type) {
    case 'SUMMARY_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

function summary(state = null, action) {
  switch (action.type) {
    case 'SUMMARY_GET_DATA_SUCCESS':
      return action.summary;
    default:
      return state;
  }
}

module.exports = {
  summaryNotFound,
  summaryIsLoading,
  summary
};
