import { API_URL } from '../../config';
import axios from 'axios';
import {
  startUpdateRequest,
  endUpdateRequest,
  errorUpdateRequest
} from '../actions/requestsActions';

export const addProductionRequest = production => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.post(`${API_URL}/productions/add`, production);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const deleteProductionRequest = id => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.delete(`${API_URL}/productions/${id}`);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const updateProductionRequest = (id, production) => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/update/${id}`, production);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const toggleCancelProductionRequest = id => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/cancel/${id}`);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const toggleFinishProductionRequest = id => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/finish/${id}`);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
export const toggleTransportProductionRequest = id => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await axios.put(`${API_URL}/productions/transport/${id}`);
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(JSON.stringify(e)));
    }
  };
};
