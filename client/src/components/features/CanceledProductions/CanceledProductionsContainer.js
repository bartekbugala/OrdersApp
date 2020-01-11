import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getCanceledProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import { loadCanceledProductionsRequest } from '../../../redux/thunks/productionsThunks';
import {
  deleteProductionRequest,
  toggleCancelProductionRequest
} from '../../../redux/thunks/productionsHandlersThunks';
import { sortCanceledProductions } from '../../../redux/thunks/sortingThunks';
import CanceledProductions from './CanceledProductions';

const mapStateToProps = state => ({
  canceledProductions: getCanceledProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadCanceledProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => dispatch(loadCanceledProductionsRequest(key, valueType, direction)),
  sortCanceledProductions: (canceledProductions, key, valueType, direction) =>
    dispatch(
      sortCanceledProductions(canceledProductions, key, valueType, direction)
    ),
  cancelProduction: (id, thunk) =>
    dispatch(toggleCancelProductionRequest(id, thunk)),
  deleteProduction: (id, thunk) => dispatch(deleteProductionRequest(id, thunk)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanceledProductions);
