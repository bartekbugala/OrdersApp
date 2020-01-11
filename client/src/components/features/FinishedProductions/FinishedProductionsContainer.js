import { connect } from 'react-redux';
import {
  loadFinishedProductionsRequest,
  resetUpdateRequest,
  resetRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest
} from '../../../redux/reducers/productions';
import FinishedProductions from './FinishedProductions';
import {
  getFinishedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
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
