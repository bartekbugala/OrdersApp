import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getCanceledProductions,
  getUpdateRequest,
  getRequest,
  getSortParams,
  getEditedProduction,
  getDateFilterParams
} from '../../../redux/selectors';
import { sortCanceledProductions } from '../../../redux/thunks/sortingThunks';
import { resetNew } from '../../../redux/thunks/productions.thunks';
import {
  loadCanceledProductionsRequest,
  loadEditedProductionRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import { updateProductionRequest } from '../../../redux/thunks/productionsRequest.thunks';

import CanceledProductions from './CanceledProductions';

const mapStateToProps = state => ({
  canceledProductions: getCanceledProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state),
  editedProduction: getEditedProduction(state),
  dateFilterParams: getDateFilterParams(state)
});

const mapDispatchToProps = dispatch => ({
  loadCanceledProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc',
    dateFilterParams = {
      startDateFilter: '',
      endDateFilter: ''
    }
  ) =>
    dispatch(
      loadCanceledProductionsRequest(
        key,
        valueType,
        direction,
        dateFilterParams
      )
    ),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id)),
  sortCanceledProductions: (canceledProductions, key, valueType, direction) =>
    dispatch(
      sortCanceledProductions(canceledProductions, key, valueType, direction)
    ),
  resetNew: () => dispatch(resetNew()),
  updateProduction: (id, production) =>
    dispatch(updateProductionRequest(id, production)),
  resetUpdateRequest: () => dispatch(resetUpdateRequest()),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CanceledProductions);
