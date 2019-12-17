import { connect } from 'react-redux';
import {
  getTransportedProductions,
  loadTransportedProductionsRequest,
  getUpdateRequest,
  getRequest,
  resetUpdateRequest,
  resetRequest,
  toggleTransportProductionRequest
} from '../../../redux/ordersRedux';
import TransportedProductions from './TransportedProductions';

const mapStateToProps = state => ({
  transportedProductions: getTransportedProductions(state),
  updateRequest: getUpdateRequest(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadTransportedProductions: () =>
    dispatch(loadTransportedProductionsRequest()),
  transportProduction: id => dispatch(toggleTransportProductionRequest(id)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportedProductions);
