import { connect } from 'react-redux';
import {
  toggleCancelProductionRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest,
  deleteProductionRequest
} from '../../../../../redux/thunks/productionsRequest.thunks';
import ProductionButtons from './ProductionButtons';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  cancelProduction: id => dispatch(toggleCancelProductionRequest(id)),
  finishProduction: id => dispatch(toggleFinishProductionRequest(id)),
  transportProduction: id => dispatch(toggleTransportProductionRequest(id)),
  deleteProduction: id => dispatch(deleteProductionRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionButtons);
