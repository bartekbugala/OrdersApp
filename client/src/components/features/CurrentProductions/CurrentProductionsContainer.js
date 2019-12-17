import { connect } from 'react-redux';
import {
  getCurrentProductions,
  getUpdateRequest,
  loadCurrentProductionsRequest,
  toggleCancelProductionRequest,
  toggleFinishProductionRequest,
  addProductionRequest,
  resetUpdateRequest
} from '../../../redux/ordersRedux';
import CurrentProductions from './CurrentProductions';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state),
  updateRequest: getUpdateRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadCurrentProductions: () => dispatch(loadCurrentProductionsRequest()),
  addProduction: production => dispatch(addProductionRequest(production)),
  cancelProduction: id => dispatch(toggleCancelProductionRequest(id)),
  finishProduction: id => dispatch(toggleFinishProductionRequest(id)),
  resetRequest: () => dispatch(resetUpdateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProductions);
