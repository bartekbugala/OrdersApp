import { connect } from 'react-redux';
import {
  getCanceled,
  getUpdateRequest,
  getRequest,
  loadCanceledProductionsRequest,
  currentToFinished,
  deleteProductionRequest,
  resetUpdateRequest,
  resetRequest,
  toggleCancelProductionRequest
} from '../../../redux/ordersRedux';
import CanceledProductions from './CanceledProductions';

const mapStateToProps = state => ({
  canceledProductions: getCanceled(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadCanceledProductions: () => dispatch(loadCanceledProductionsRequest()),
  cancelProduction: id => dispatch(toggleCancelProductionRequest(id)),
  deleteProduction: id => dispatch(deleteProductionRequest(id)),
  currentToFinished: (currArr, id) => dispatch(currentToFinished(currArr, id)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanceledProductions);