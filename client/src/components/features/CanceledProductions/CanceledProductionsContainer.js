import { connect } from 'react-redux';
import {
  loadCanceledProductionsRequest,
  deleteProductionRequest,
  resetUpdateRequest,
  resetRequest,
  toggleCancelProductionRequest
} from '../../../redux/reducers/productions';
import {
  getCanceledProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import CanceledProductions from './CanceledProductions';

const mapStateToProps = state => ({
  canceledProductions: getCanceledProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadCanceledProductions: () => dispatch(loadCanceledProductionsRequest()),
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
