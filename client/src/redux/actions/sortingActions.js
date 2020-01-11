//// Actions
// action name creator
const reducerName = 'sorting';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const SORT_ALL = createActionName('SORT_ALL');
export const SORT_CURRENT = createActionName('SORT_CURRENT');
export const SORT_FINISHED = createActionName('SORT_FINISHED');
export const SORT_TRANSPORTED = createActionName('SORT_TRANSPORTED');
export const SORT_CANCELED = createActionName('SORT_CANCELED');

// actions
export const sortAll = payload => ({ payload, type: SORT_ALL });
export const sortCurrent = payload => ({ payload, type: SORT_CURRENT });
export const sortFinished = payload => ({ payload, type: SORT_FINISHED });
export const sortTransported = payload => ({ payload, type: SORT_TRANSPORTED });
export const sortCanceled = payload => ({ payload, type: SORT_CANCELED });
