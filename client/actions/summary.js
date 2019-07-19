const axios = require('axios');

function summaryNotFound(bool) {
  return {
    type: 'SUMMARY_NOT_FOUND',
    notFound: bool
  };
}

function summaryIsLoading(bool) {
  return {
    type: 'SUMMARY_IS_LOADING',
    isLoading: bool
  };
}

function summary(summary) {
  return {
    type: 'SUMMARY_GET_DATA_SUCCESS',
    summary
  };
}

function summaryGetData(asin) {
  return dispatch => {
    dispatch(summaryIsLoading(true));
    axios
      .get(
        `http://reviews-dev.us-west-2.elasticbeanstalk.com/summaries/${asin}`
      )
      .then(response => {
        console.log(
          'Recieved the following data from GET to /summaries:',
          response.data
        );

        dispatch(summary(response.data));
        dispatch(summaryIsLoading(false));

        if (!response.data) {
          dispatch(summaryNotFound(true));
        }
      })
      .catch(err => {
        dispatch(summaryIsLoading(false));
        dispatch(summaryNotFound(true));
        throw new Error(err);
      });
  };
}

module.exports = {
  summaryNotFound,
  summaryIsLoading,
  summary,
  summaryGetData
};
