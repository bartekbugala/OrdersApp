import { connect } from 'react-redux';
import {
  getTransportedProductions,
  loadTransportedProductionsRequest,
  getUpdateRequest,
  getRequest,
  resetUpdateRequest,
  resetRequest,
  toggleTransportProductionRequest
} from '../../../redux/reducers/orders';
import TransportedProductions from './TransportedProductions';

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
