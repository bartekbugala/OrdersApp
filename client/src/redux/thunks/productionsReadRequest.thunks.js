import { API_URL } from '../../config';
import axios from 'axios';
import sortByColumn from '../../utils/sortByColumn';
import {
  startRequest,
  endRequest,
  errorRequest
} from '../actions/requestsActions';
import {
  loadAllProductions,
  loadCurrentProductions,
  loadFinishedProductions,
  loadTransportedProductions,
  loadCanceledProductions,
  loadEditedProduction
} from '../actions/productionsActions';

//// Thunks
export const loadAllProductionsRequest = (key, valueType, direction) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions`);
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadAllProductions(res.data));
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
export const loadFinishedProductionsRequest = (key, valueType, direction) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/finished`);
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadFinishedProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadCanceledProductionsRequest = (key, valueType, direction) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/canceled`);
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadCanceledProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
export const loadTransportedProductionsRequest = (
  key,
  valueType,
  direction
) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/productions/transported`);
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadTransportedProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
// load edited productrion
export const loadEditedProductionRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${API_URL}/productions/${id}`);
      const payload = res.data;
      const downpaymentDate = new Date(res.data.downpayment);
      payload.downpayment = downpaymentDate;
      dispatch(loadEditedProduction(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
