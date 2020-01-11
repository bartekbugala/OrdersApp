//// Actions
// action name creator
const reducerName = 'requests';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const START_UPDATE_REQUEST = createActionName('START_UPDATE_REQUEST');
export const END_UPDATE_REQUEST = createActionName('END_UPDATE_REQUEST');
export const RESET_UPDATE_REQUEST = createActionName('RESET_UPDATE_REQUEST');
export const ERROR_UPDATE_REQUEST = createActionName('ERROR_UPDATE_REQUEST');

// actions
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
