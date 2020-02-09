//// Actions
// action name creator
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const REGISTER = createActionName('REGISTER');
export const LOGIN = createActionName('LOGIN');

// actions
export const register = payload => ({ payload, type: REGISTER });
export const login = payload => ({ payload, type: LOGIN });
