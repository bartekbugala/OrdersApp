import sortByColumn from '../../utils/sortByColumn';

import {
  sortCurrent,
  sortAll,
  sortFinished,
  sortTransported,
  sortCanceled
} from '../actions/sortingActions';

import {
  startRequest,
  endRequest,
  errorRequest
} from '../actions/requestsActions';

export const sortAllProductions = (
  allProductions,
  key,
  valueType,
  direction
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let payload = {
        sorted: sortByColumn(allProductions, key, valueType, direction),
        sortParams: { key: key, valueType: valueType, direction: direction }
      };
      dispatch(sortAll(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

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

export const sortFinishedProductions = (
  finishedProductions,
  key,
  valueType,
  direction
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let payload = {
        sorted: sortByColumn(finishedProductions, key, valueType, direction),
        sortParams: { key: key, valueType: valueType, direction: direction }
      };
      dispatch(sortFinished(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const sortTransportedProductions = (
  transportedProductions,
  key,
  valueType,
  direction
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let payload = {
        sorted: sortByColumn(transportedProductions, key, valueType, direction),
        sortParams: { key: key, valueType: valueType, direction: direction }
      };
      dispatch(sortTransported(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const sortCanceledProductions = (
  canceledProductions,
  key,
  valueType,
  direction
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let payload = {
        sorted: sortByColumn(canceledProductions, key, valueType, direction),
        sortParams: { key: key, valueType: valueType, direction: direction }
      };
      dispatch(sortCanceled(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
