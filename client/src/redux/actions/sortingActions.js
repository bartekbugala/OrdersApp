//// Actions
// action name creator
const reducerName = 'sorting';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const SORT_CURRENT = createActionName('SORT_CURRENT');

// actions
export const sortCurrent = payload => ({ payload, type: SORT_CURRENT });
