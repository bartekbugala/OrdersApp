//// Actions
// action name creator
const reducerName = 'productions';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const FINISH_PRODUCTION = createActionName('FINISH_PRODUCTION');
export const SORT_CURRENT = createActionName('SORT_CURRENT');

export const LOAD_PRODUCTIONS = createActionName('LOAD_PRODUCTIONS');
export const LOAD_CURRENT = createActionName('LOAD_CURRENT');
export const LOAD_CANCELED = createActionName('LOAD_CANCELED');
export const LOAD_FINISHED = createActionName('LOAD_FINISHED');
export const LOAD_TRANSPORTED = createActionName('LOAD_TRANSPORTED');

// actions
export const loadProductions = payload => ({ payload, type: LOAD_PRODUCTIONS });
export const sortCurrent = payload => ({ payload, type: SORT_CURRENT });
export const loadCurrentProductions = payload => ({
  payload,
  type: LOAD_CURRENT
});
export const loadCanceled = payload => ({ payload, type: LOAD_CANCELED });
export const loadFinished = payload => ({ payload, type: LOAD_FINISHED });
export const loadTransported = payload => ({ payload, type: LOAD_TRANSPORTED });
