import initialState from '../initialState';

import {
  SORT_ALL,
  SORT_CURRENT,
  SORT_FINISHED,
  SORT_TRANSPORTED,
  SORT_CANCELED
} from '../actions/sortingActions';

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SORT_ALL:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };
    case SORT_CURRENT:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };
    case SORT_FINISHED:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };
    case SORT_TRANSPORTED:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };
    case SORT_CANCELED:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };
    default:
      return statePart;
  }
}
