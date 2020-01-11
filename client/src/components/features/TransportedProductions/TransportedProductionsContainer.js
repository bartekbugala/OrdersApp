import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import TransportedProductions from './TransportedProductions';
import {
  getTransportedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import {
  loadTransportedProductionsRequest,
  toggleTransportProductionRequest
} from '../../../redux/thunks/productionsThunks';
const mapStateToProps = state => ({
  transportedProductions: getTransportedProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadTransportedProductions: () =>
    dispatch(loadTransportedProductionsRequest()),
  transportProduction: (id, thunk) =>
    dispatch(toggleTransportProductionRequest(id, thunk)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportedProductions);
