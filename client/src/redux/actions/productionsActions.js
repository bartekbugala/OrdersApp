//// Actions
// action name creator
const reducerName = 'productions';
const createActionName = name => `app/${reducerName}/${name}`;

// action creators
export const LOAD_ALL = createActionName('LOAD_ALL');
export const LOAD_CURRENT = createActionName('LOAD_CURRENT');
export const LOAD_CANCELED = createActionName('LOAD_CANCELED');
export const LOAD_FINISHED = createActionName('LOAD_FINISHED');
export const LOAD_TRANSPORTED = createActionName('LOAD_TRANSPORTED');
export const LOAD_EDITED = createActionName('LOAD_EDITED');
export const LOAD_NEW = createActionName('LOAD_NEW');

// actions
export const loadAllProductions = payload => ({
  payload,
  type: LOAD_ALL
});
export const loadCurrentProductions = payload => ({
  payload,
  type: LOAD_CURRENT
});
export const loadCanceledProductions = payload => ({
  payload,
  type: LOAD_CANCELED
});
export const loadFinishedProductions = payload => ({
  payload,
  type: LOAD_FINISHED
});
export const loadTransportedProductions = payload => ({
  payload,
  type: LOAD_TRANSPORTED
});
export const loadEditedProduction = payload => ({
  payload,
  type: LOAD_EDITED
});
export const loadNewProduction = payload => ({
  payload,
  type: LOAD_NEW
});
