import { connect } from 'react-redux';
import { updateEdited } from '../../../redux/thunks/productions.thunks';
import { updateProductionRequest } from '../../../redux/thunks/productionsRequest.thunks';
import { loadAllProductionsRequest } from '../../../redux/thunks/productionsReadRequest.thunks';
import { loadEditedProductionRequest } from '../../../redux/thunks/productionsReadRequest.thunks';
import EditProduction from './EditProduction';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loadAllProductions: (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => dispatch(loadAllProductionsRequest(key, valueType, direction)),
  updateEdited: editedProduction => dispatch(updateEdited(editedProduction)),
  updateProduction: (id, production, thunk) =>
    dispatch(updateProductionRequest(id, production, thunk)),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduction);
