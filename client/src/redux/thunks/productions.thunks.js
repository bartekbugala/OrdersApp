import {
  startUpdateRequest,
  endUpdateRequest,
  errorUpdateRequest
} from '../actions/requestsActions';
import {
  loadEditedProduction,
  loadNewProduction
} from '../actions/productionsActions';
import emptyNewProduction from '../reducers/productions';
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
      await dispatch(loadNewProduction(emptyNewProduction));
      dispatch(endUpdateRequest());
    } catch (e) {
      dispatch(errorUpdateRequest(e.message));
    }
  };
};
