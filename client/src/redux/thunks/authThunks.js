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

/* export const registerUserRequest = (userData, history) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${API_URL}/register`, userData);
      res => history.push('/login');
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(JSON.stringify(e)));
    }
  };
}; */

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:8000/api/register', userData)
    .then(res => history.push('/login')) // re-direct to login on successful register
    .catch(err => dispatch(getErrors(err.response.data)));
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post('http://localhost:8000/api/login', userData)
    .then(res => {
      console.log('login ok', res);
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch(getErrors(err.response.data)));
};
const USER_LOADING = 'USER_LOADING';
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
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
