import initialState from '../initialState';

import { SORT_CURRENT } from '../actions/sortingActions';

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SORT_CURRENT:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };
    default:
      return statePart;
  }
}
