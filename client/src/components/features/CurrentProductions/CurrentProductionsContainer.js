import { connect } from 'react-redux';
import {
  getCurrentProductions,
  getUpdateRequest,
  getRequest,
  loadCurrentProductionsRequest,
  toggleCancelProductionRequest,
  toggleFinishProductionRequest,
  addProductionRequest,
  resetUpdateRequest,
  resetRequest
} from '../../../redux/ordersRedux';
import CurrentProductions from './CurrentProductions';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadCurrentProductions: () => dispatch(loadCurrentProductionsRequest()),
  addProduction: (production, thunk) =>
    dispatch(addProductionRequest(production, thunk)),
  cancelProduction: (id, thunk) =>
    dispatch(toggleCancelProductionRequest(id, thunk)),
  finishProduction: (id, thunk) =>
    dispatch(toggleFinishProductionRequest(id, thunk)),
  resetUpdateRequest: () => dispatch(resetUpdateRequest()),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProductions);
