import { connect } from 'react-redux';
import {
  getCurrentProductions,
  getFinishedProductions
} from '../../../redux/selectors';
import {
  loadCurrentProductionsRequest,
  loadFinishedProductionsRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import ProductionStats from './ProductionStats';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state),
  finishedProductions: getFinishedProductions(state)
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
