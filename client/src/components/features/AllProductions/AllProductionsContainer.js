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
} from '../../../redux/ordersRedux';
import AllProductions from './AllProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadAllProductions: () => dispatch(loadProductionsRequest()),
  addProduction: production => dispatch(addProductionRequest(production)),
  cancelProduction: id => dispatch(toggleCancelProductionRequest(id)),
  finishProduction: id => dispatch(toggleFinishProductionRequest(id)),
  transportProduction: id => dispatch(toggleTransportProductionRequest(id)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductions);
