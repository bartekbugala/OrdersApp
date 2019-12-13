import { connect } from 'react-redux';
import {
  getCanceled,
  getUpdateRequest,
  loadCanceledProductionsRequest,
  currentToFinished,
  resetUpdateRequest,
  toggleCancelProductionRequest
} from '../../../redux/ordersRedux';
import CanceledProductions from './CanceledProductions';

const mapStateToProps = state => ({
  canceledProductions: getCanceled(state),
  updateRequest: getUpdateRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadCanceledProductions: () => dispatch(loadCanceledProductionsRequest()),
  cancelProduction: id => dispatch(toggleCancelProductionRequest(id)),
  currentToFinished: (currArr, id) => dispatch(currentToFinished(currArr, id)),
  resetRequest: () => dispatch(resetUpdateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CanceledProductions);
