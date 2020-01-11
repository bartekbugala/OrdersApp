import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import FinishedProductions from './FinishedProductions';
import {
  getFinishedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import {
  loadFinishedProductionsRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest
} from '../../../redux/thunks/productionsThunks';
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
