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
  getEditedProduction
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
  editedProduction: getEditedProduction(state)
});

const mapDispatchToProps = dispatch => ({
  loadFinishedProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => dispatch(loadFinishedProductionsRequest(key, valueType, direction)),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id)),
  sortFinishedProductions: (finishedProductions, key, valueType, direction) =>
    dispatch(
      sortFinishedProductions(finishedProductions, key, valueType, direction)
    ),
  updateProduction: (id, production, thunk) =>
    dispatch(updateProductionRequest(id, production, thunk)),
  resetUpdateRequest: () => dispatch(resetUpdateRequest()),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishedProductions);
