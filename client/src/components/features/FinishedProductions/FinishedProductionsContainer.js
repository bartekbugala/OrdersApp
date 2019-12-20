import { connect } from 'react-redux';
import {
  getFinishedProductions,
  loadFinishedProductionsRequest,
  getUpdateRequest,
  getRequest,
  resetUpdateRequest,
  resetRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest
} from '../../../redux/ordersRedux';
import FinishedProductions from './FinishedProductions';

const mapStateToProps = state => ({
  finishedProductions: getFinishedProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadFinishedProductions: () => dispatch(loadFinishedProductionsRequest()),
  finishProduction: (id, thunk) =>
    dispatch(toggleFinishProductionRequest(id, thunk)),
  transportProduction: (id, thunk) =>
    dispatch(toggleTransportProductionRequest(id, thunk)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishedProductions);
