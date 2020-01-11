import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getTransportedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import { loadTransportedProductionsRequest } from '../../../redux/thunks/productionsThunks';
import { toggleTransportProductionRequest } from '../../../redux/thunks/productionsHandlersThunks';
import { sortTransportedProductions } from '../../../redux/thunks/sortingThunks';
import TransportedProductions from './TransportedProductions';
const mapStateToProps = state => ({
  transportedProductions: getTransportedProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadTransportedProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => dispatch(loadTransportedProductionsRequest(key, valueType, direction)),
  sortTransportedProductions: (
    transportedProductions,
    key,
    valueType,
    direction
  ) =>
    dispatch(
      sortTransportedProductions(
        transportedProductions,
        key,
        valueType,
        direction
      )
    ),
  transportProduction: (id, thunk) =>
    dispatch(toggleTransportProductionRequest(id, thunk)),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportedProductions);
