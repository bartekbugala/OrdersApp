import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getAllProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import { sortAllProductions } from '../../../redux/thunks/sortingThunks';
import { loadAllProductionsRequest } from '../../../redux/thunks/productionsThunks';
import {
  addProductionRequest,
  toggleCancelProductionRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest
} from '../../../redux/thunks/productionsHandlersThunks';
import AllProductions from './AllProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadAllProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => dispatch(loadAllProductionsRequest(key, valueType, direction)),

  sortAllProductions: (allProductions, key, valueType, direction) =>
    dispatch(sortAllProductions(allProductions, key, valueType, direction)),
  addProduction: (production, thunk) =>
    dispatch(addProductionRequest(production, thunk)),
  cancelProduction: (id, thunk) =>
    dispatch(toggleCancelProductionRequest(id, thunk)),
  finishProduction: (id, thunk) =>
    dispatch(toggleFinishProductionRequest(id, thunk)),
  transportProduction: (id, thunk) =>
    dispatch(toggleTransportProductionRequest(id, thunk)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductions);
