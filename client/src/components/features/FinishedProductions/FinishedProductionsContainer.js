import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getFinishedProductions,
  getUpdateRequest,
  getRequest,
  getSortParams,
  getEditedProduction,
  getDateFilterParams
} from '../../../redux/selectors';
import { sortFinishedProductions } from '../../../redux/thunks/sortingThunks';
import {
  loadFinishedProductionsRequest,
  loadEditedProductionRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import { updateProductionRequest } from '../../../redux/thunks/productionsRequest.thunks';

import FinishedProductions from './FinishedProductions';

const mapStateToProps = state => ({
  finishedProductions: getFinishedProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state),
  editedProduction: getEditedProduction(state),
  dateFilterParams: getDateFilterParams(state)
});

const mapDispatchToProps = dispatch => ({
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
    ),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id)),
  sortFinishedProductions: (finishedProductions, key, valueType, direction) =>
    dispatch(
      sortFinishedProductions(finishedProductions, key, valueType, direction)
    ),
  updateProduction: (id, production) =>
    dispatch(updateProductionRequest(id, production)),
  resetUpdateRequest: () => dispatch(resetUpdateRequest()),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishedProductions);
