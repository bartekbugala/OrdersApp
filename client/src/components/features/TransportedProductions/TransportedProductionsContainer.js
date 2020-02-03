import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getTransportedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams,
  getEditedProduction,
  getDateFilterParams
} from '../../../redux/selectors';
import { sortTransportedProductions } from '../../../redux/thunks/sortingThunks';
import {
  loadTransportedProductionsRequest,
  loadEditedProductionRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import { updateProductionRequest } from '../../../redux/thunks/productionsRequest.thunks';

import TransportedProductions from './TransportedProductions';

const mapStateToProps = state => ({
  transportedProductions: getTransportedProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state),
  editedProduction: getEditedProduction(state),
  dateFilterParams: getDateFilterParams(state)
});

const mapDispatchToProps = dispatch => ({
  loadTransportedProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc',
    dateFilterParams = {
      startDateFilter: '',
      endDateFilter: ''
    }
  ) =>
    dispatch(
      loadTransportedProductionsRequest(
        key,
        valueType,
        direction,
        dateFilterParams
      )
    ),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id)),
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
  updateProduction: (id, production, thunk) =>
    dispatch(updateProductionRequest(id, production, thunk)),
  resetUpdateRequest: () => dispatch(resetUpdateRequest()),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransportedProductions);
