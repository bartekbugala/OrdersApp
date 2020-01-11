import axios from 'axios';
import sortByColumn from '../../utils/sortByColumn';
import { API_URL } from '../../config';
import initialState from '../initialState';

//// Thunks
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

export const loadProductionsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions`);
      dispatch(loadProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadCurrentProductionsRequest = (key, valueType, direction) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/current`);
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadCurrentProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadCanceledProductionsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/canceled`);
      dispatch(loadCanceled(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadFinishedProductionsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/finished`);
      dispatch(loadFinished(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadTransportedProductionsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/transported`);
      dispatch(loadTransported(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const addProductionRequest = (production, thunk) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.post(`${API_URL}/productions/add`, production);
      dispatch(thunk);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const deleteProductionRequest = (id, thunk) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.delete(`${API_URL}/productions/${id}`);
      dispatch(thunk);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const toggleCancelProductionRequest = (id, thunk) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/cancel/${id}`);
      dispatch(thunk);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const toggleFinishProductionRequest = (id, thunk) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/finish/${id}`);
      dispatch(thunk);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const toggleTransportProductionRequest = (id, thunk) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/transport/${id}`);
      dispatch(thunk);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};

//// Actions
// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const FINISH_PRODUCTION = createActionName('FINISH_PRODUCTION');
export const SORT_CURRENT = createActionName('SORT_CURRENT');

export const LOAD_PRODUCTIONS = createActionName('LOAD_PRODUCTIONS');
export const LOAD_CURRENT = createActionName('LOAD_CURRENT');
export const LOAD_CANCELED = createActionName('LOAD_CANCELED');
export const LOAD_FINISHED = createActionName('LOAD_FINISHED');
export const LOAD_TRANSPORTED = createActionName('LOAD_TRANSPORTED');

export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');

// actions
export const loadProductions = payload => ({ payload, type: LOAD_PRODUCTIONS });
export const sortCurrent = payload => ({ payload, type: SORT_CURRENT });
export const loadCurrentProductions = payload => ({
  payload,
  type: LOAD_CURRENT
});
export const loadCanceled = payload => ({ payload, type: LOAD_CANCELED });
export const loadFinished = payload => ({ payload, type: LOAD_FINISHED });
export const loadTransported = payload => ({ payload, type: LOAD_TRANSPORTED });

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const startUpdateRequest = () => ({ type: START_UPDATE_REQUEST });
export const endUpdateRequest = () => ({ type: END_UPDATE_REQUEST });
export const resetUpdateRequest = () => ({ type: RESET_UPDATE_REQUEST });
export const errorUpdateRequest = error => ({
  error,
  type: ERROR_UPDATE_REQUEST
});

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTIONS:
      return { ...statePart, allProductions: action.payload };

    case SORT_CURRENT:
      return {
        ...statePart,
        currentProductions: action.payload.sorted,
        sortParams: action.payload.sortParams
      };

    case LOAD_CURRENT:
      return { ...statePart, currentProductions: action.payload };
    case LOAD_CANCELED:
      return { ...statePart, canceledProductions: action.payload };
    case LOAD_FINISHED:
      return { ...statePart, finishedProductions: action.payload };
    case LOAD_TRANSPORTED:
      return { ...statePart, transportedProductions: action.payload };

    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: true }
      };
    case START_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: true, error: null, success: null }
      };
    case END_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: true }
      };
    case RESET_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: null }
      };
    case ERROR_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: action.error, success: true }
      };
    default:
      return statePart;
  }
}
