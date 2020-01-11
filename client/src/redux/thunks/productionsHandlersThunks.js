import { API_URL } from '../../config';
import axios from 'axios';
import {
  startUpdateRequest,
  endUpdateRequest,
  errorUpdateRequest
} from '../actions/requestsActions';

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
