import { combineReducers } from 'redux';
import {
  reviewsHasError,
  reviewsIsLoading,
  reviewsNotFound,
  reviews
} from './reviews';

import { summaryIsLoading, summaryNotFound, summary } from './summary';

export default combineReducers({
  reviewsHasError,
  reviewsIsLoading,
  reviewsNotFound,
  reviews,
  summaryIsLoading,
  summaryNotFound,
  summary
});
