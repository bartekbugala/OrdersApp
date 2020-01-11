import { connect } from 'react-redux';
import {
  getAllProductions,
  getUpdateRequest,
  loadProductionsRequest,
  toggleCancelProductionRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest,
  addProductionRequest,
  resetUpdateRequest,
  resetRequest,
  getRequest
} from '../../../redux/reducers/orders';
import AllProductions from './AllProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadAllProductions: () => dispatch(loadProductionsRequest()),
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
