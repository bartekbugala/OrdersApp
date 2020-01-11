import sortByColumn from '../../utils/sortByColumn';

import { sortCurrent } from '../actions/sortingActions';

import {
  startRequest,
  endRequest,
  errorRequest
} from '../actions/requestsActions';

export const sortCurrentProductions = (
  currentProductions,
  key,
  valueType,
  direction
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let payload = {
        sorted: sortByColumn(currentProductions, key, valueType, direction),
        sortParams: { key: key, valueType: valueType, direction: direction }
      };
      dispatch(sortCurrent(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
