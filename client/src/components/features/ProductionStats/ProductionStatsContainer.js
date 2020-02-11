import { connect } from 'react-redux';
import { getCurrentProductions } from '../../../redux/selectors';
import { loadCurrentProductionsRequest } from '../../../redux/thunks/productionsReadRequest.thunks';
import ProductionStats from './ProductionStats';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state)
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
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionStats);
