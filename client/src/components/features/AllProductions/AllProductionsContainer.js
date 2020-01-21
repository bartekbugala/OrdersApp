import { connect } from 'react-redux';
import {
  resetUpdateRequest,
  resetRequest
} from '../../../redux/actions/requestsActions';
import {
  getAllProductions,
  getUpdateRequest,
  getRequest,
  getSortParams,
  getEditedProduction,
  getNewProduction,
  getDateFilterParams
} from '../../../redux/selectors';
import { sortAllProductions } from '../../../redux/thunks/sortingThunks';
import { resetNew } from '../../../redux/thunks/productions.thunks';
import {
  loadAllProductionsRequest,
  loadEditedProductionRequest
} from '../../../redux/thunks/productionsReadRequest.thunks';
import {
  addProductionRequest,
  updateProductionRequest
} from '../../../redux/thunks/productionsRequest.thunks';
import AllProductions from './AllProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state),
  updateRequest: getUpdateRequest(state),
  sortParams: getSortParams(state),
  request: getRequest(state),
  editedProduction: getEditedProduction(state),
  newProduction: getNewProduction(state),
  dateFilterParams: getDateFilterParams(state)
});
const mapDispatchToProps = dispatch => ({
  loadAllProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc',
    dateFilterParams
  ) =>
    dispatch(
      loadAllProductionsRequest(key, valueType, direction, dateFilterParams)
    ),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id)),
  sortAllProductions: (allProductions, key, valueType, direction) =>
    dispatch(sortAllProductions(allProductions, key, valueType, direction)),
  addProduction: (production, thunk) =>
    dispatch(addProductionRequest(production, thunk)),
  updateProduction: (id, production, thunk) =>
    dispatch(updateProductionRequest(id, production, thunk)),
  resetNew: () => dispatch(resetNew()),
  resetRequest: () => dispatch(resetRequest()),
  resetUpdateRequest: () => dispatch(resetUpdateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductions);
