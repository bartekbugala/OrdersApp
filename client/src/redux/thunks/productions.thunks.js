import {
  startUpdateRequest,
  endUpdateRequest,
  errorUpdateRequest
} from '../actions/requestsActions';
import {
  loadEditedProduction,
  loadNewProduction
} from '../actions/productionsActions';
import initialState from '../initialState';
export const updateEdited = editedProduction => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await dispatch(loadEditedProduction(editedProduction));
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};
export const updateNew = newProduction => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await dispatch(loadNewProduction(newProduction));
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};
export const resetNew = () => {
  return async dispatch => {
    dispatch(startUpdateRequest());
    try {
      await dispatch(loadNewProduction(initialState.newProduction));
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};
