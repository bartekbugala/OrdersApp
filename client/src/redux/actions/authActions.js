//// Actions
// action name creator
const reducerName = 'auth';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const GET_ERRORS = createActionName('GET_ERRORS');
export const USER_LOADING = createActionName('USER_LOADING');
export const SET_CURRENT_USER = createActionName('SET_CURRENT_USER');

// actions
export const getErrors = payload => ({ payload, type: GET_ERRORS });
export const userLoading = payload => ({ payload, type: USER_LOADING });
export const setCurrentUser = payload => ({ payload, type: SET_CURRENT_USER });
