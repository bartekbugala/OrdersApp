import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getCurrentProductions,
  getUpdateRequest,
  getRequest,
  getSortParams,
  getEditedProduction,
  getNewProduction,
  getDateFilterParams
} from '../../../redux/selectors';
import { sortCurrentProductions } from '../../../redux/thunks/sortingThunks';
import { resetNew } from '../../../redux/thunks/productions.thunks';
import {
  loadCurrentProductionsRequest,
  loadEditedProductionRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import {
  addProductionRequest,
  updateProductionRequest
} from '../../../redux/thunks/productionsRequest.thunks';

import CurrentProductions from './CurrentProductions';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state),
  editedProduction: getEditedProduction(state),
  newProduction: getNewProduction(state),
  dateFilterParams: getDateFilterParams(state)
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
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id)),
  sortCurrentProductions: (allProductions, key, valueType, direction) =>
    dispatch(sortCurrentProductions(allProductions, key, valueType, direction)),
  addProduction: production => dispatch(addProductionRequest(production)),
  updateProduction: (id, production) =>
    dispatch(updateProductionRequest(id, production)),
  resetNew: () => dispatch(resetNew()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest()),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProductions);
