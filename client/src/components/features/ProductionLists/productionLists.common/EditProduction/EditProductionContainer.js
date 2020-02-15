import { connect } from 'react-redux';
import { updateEdited } from '../../../../../redux/thunks/productions.thunks';
import { updateProductionRequest } from '../../../../../redux/thunks/productionsRequest.thunks';
import { loadEditedProductionRequest } from '../../../../../redux/thunks/productionsReadRequest.thunks';
import EditProduction from './EditProduction';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateEdited: editedProduction => dispatch(updateEdited(editedProduction)),
  updateProduction: (id, production) =>
    dispatch(updateProductionRequest(id, production)),
  loadEditedProduction: id => dispatch(loadEditedProductionRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduction);
