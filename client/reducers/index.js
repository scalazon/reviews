import { combineReducers } from 'redux';
import {
  reviewsHasError,
  reviewsIsLoading,
  reviewsNotFound,
  reviews
} from './reviews';

export default combineReducers({
  reviewsHasError,
  reviewsIsLoading,
  reviewsNotFound,
  reviews
});
