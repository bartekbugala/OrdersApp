import axios from 'axios';
import { API_URL } from '../config';

//// Initial state
const initialState = {
  menuLinks: [
    { path: '/current', title: 'Bieżące' },
    { path: '/finished', title: 'Zrealizowane' },
    { path: '/', title: 'Anulowane' },
    { path: '/', title: 'Wszystkie' },
    { path: '/', title: 'Statystyki' }
  ],
  allProductions: [],
  currentProductions: [],
  finishedProductions: [],
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  ordersPerPage: 10,
  presentPage: 1,
  request: {
    pending: false,
    error: null,
    success: null
  }
};

//// Selectors
export const getMenuLinks = ({ orders }) => orders.menuLinks;
export const getAllProductions = ({ orders }) => orders.allProductions;
export const getCurrentProductions = ({ orders }) => orders.currentProductions;
export const getFinishedProductions = ({ orders }) =>
  orders.finishedProductions;

//// Thunks
/*
currentProductions.filter(
  el => el.id === action.payload.id
)*/
export const currentToFinished = (currArr, id) => {
  console.log(id, currArr);
  return dispatch => {
    const movedIndex = currArr
      .map(e => {
        return e.id;
      })
      .indexOf(id);
    const payload = currArr[movedIndex];
    const currArrNew = currArr.filter(el => el.id !== id);
    dispatch(finishProduction(payload, currArrNew));
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
/*
export const loadSingleOrderRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/orders/${id}`);
      dispatch(loadSingleOrder(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
}; */

//// Actions
// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action exports
export const FINISH_PRODUCTION = createActionName('FINISH_PRODUCTION');

export const LOAD_PRODUCTIONS = createActionName('LOAD_PRODUCTIONS');

export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');

export const finishProduction = (payload, currArrNew) => ({
  payload,
  currArrNew,
  type: FINISH_PRODUCTION
});

export const loadProductions = payload => ({ payload, type: LOAD_PRODUCTIONS });

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
    case FINISH_PRODUCTION:
      return {
        ...statePart,
        finishedProductions: [...statePart.finishedProductions, action.payload],
        currentProductions: action.currArrNew
      };
    case LOAD_PRODUCTIONS:
      return { ...statePart, allProductions: action.payload };
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
