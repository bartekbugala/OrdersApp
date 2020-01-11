import initialState from '../initialState';

import {
  LOAD_PRODUCTIONS,
  LOAD_CURRENT,
  LOAD_CANCELED,
  LOAD_FINISHED,
  LOAD_TRANSPORTED
} from '../actions/productionsActions';

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTIONS:
      return { ...statePart, allProductions: action.payload };
    case LOAD_CURRENT:
      return { ...statePart, currentProductions: action.payload };
    case LOAD_CANCELED:
      return { ...statePart, canceledProductions: action.payload };
    case LOAD_FINISHED:
      return { ...statePart, finishedProductions: action.payload };
    case LOAD_TRANSPORTED:
      return { ...statePart, transportedProductions: action.payload };
    default:
      return statePart;
  }
}
