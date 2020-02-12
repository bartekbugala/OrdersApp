import { connect } from 'react-redux';
import {
  getCurrentProductions,
  getFinishedProductions,
  getTransportedProductions
} from '../../../redux/selectors';
import {
  loadCurrentProductionsRequest,
  loadFinishedProductionsRequest,
  loadTransportedProductionsRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import ProductionStats from './ProductionStats';
import TransportedProductions from '../TransportedProductions/TransportedProductions';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state),
  finishedProductions: getFinishedProductions(state),
  transportedProductions: getTransportedProductions(state)
});

const mapDispatchToProps = dispatch => ({
  loadCurrentProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc',
    dateFilterParams = {
      startDateFilter: '',
      endDateFilter: ''
    }
  ) =>
    dispatch(
      loadCurrentProductionsRequest(key, valueType, direction, dateFilterParams)
    ),
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
  loadFinishedProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc',
    dateFilterParams = {
      startDateFilter: '',
      endDateFilter: ''
    }
  ) =>
    dispatch(
      loadFinishedProductionsRequest(
        key,
        valueType,
        direction,
        dateFilterParams
      )
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionStats);
