import axios from 'axios';
import { API_URL } from '../../config';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { getErrors, setCurrentUser, userLoading } from '../actions/authActions';

import {
  startRequest,
  endRequest,
  errorRequest
} from '../actions/requestsActions';

export const registerUser = (userData, history) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/register`, userData);
      history.push('/login');
      dispatch(endRequest());
    } catch (err) {
      dispatch(errorRequest(err.response.data));
      dispatch(getErrors(err.response.data));
    }
  };
};

export const loginUser = userData => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.post(`${API_URL}/login`, userData);
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(endRequest());
    } catch (err) {
      dispatch(errorRequest(err.response.data));
      dispatch(getErrors(err.response.data));
    }
  };
};

// User loading
export const setUserLoading = () => {
  return dispatch => {
    dispatch(userLoading());
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
