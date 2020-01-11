import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getFinishedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams
} from '../../../redux/selectors';
import { loadFinishedProductionsRequest } from '../../../redux/thunks/productionsThunks';
import {
  toggleFinishProductionRequest,
  toggleTransportProductionRequest
} from '../../../redux/thunks/productionsHandlersThunks';
import { sortFinishedProductions } from '../../../redux/thunks/sortingThunks';
import FinishedProductions from './FinishedProductions';

const mapStateToProps = state => ({
  finishedProductions: getFinishedProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
  loadFinishedProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => dispatch(loadFinishedProductionsRequest(key, valueType, direction)),
  sortFinishedProductions: (finishedProductions, key, valueType, direction) =>
    dispatch(
      sortFinishedProductions(finishedProductions, key, valueType, direction)
    ),
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
