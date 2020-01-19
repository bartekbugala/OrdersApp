import {
  START_REQUEST,
  END_REQUEST,
  RESET_REQUEST,
  ERROR_REQUEST,
  START_UPDATE_REQUEST,
  END_UPDATE_REQUEST,
  RESET_UPDATE_REQUEST,
  ERROR_UPDATE_REQUEST
} from '../actions/requestsActions';

const initialState = {
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  request: {
    pending: false,
    error: null,
    success: null
  }
};

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: true }
      };
    case START_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: true, error: null, success: null }
      };
    case END_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: true }
      };
    case RESET_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: null, success: null }
      };
    case ERROR_UPDATE_REQUEST:
      return {
        ...statePart,
        updateRequest: { pending: false, error: action.error, success: true }
      };
    default:
      return statePart;
  }
}
