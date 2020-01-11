import { API_URL } from '../../config';
import axios from 'axios';
import sortByColumn from '../../utils/sortByColumn';
import {
  startRequest,
  endRequest,
  errorRequest,
  startUpdateRequest,
  endUpdateRequest,
  errorUpdateRequest
} from '../actions/requestsActions';
import {
  loadAllProductions,
  loadCurrentProductions,
  loadFinished,
  loadTransported,
  loadCanceled
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
      dispatch(loadFinished(res.data));
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
      dispatch(loadCanceled(res.data));
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
