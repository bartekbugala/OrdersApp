import { connect } from 'react-redux';
import {
  toggleCancelProductionRequest,
  toggleFinishProductionRequest,
  toggleTransportProductionRequest
} from '../../../redux/thunks/productionsRequest.thunks';
import ProductionButtons from './ProductionButtons';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  cancelProduction: (id, thunk) =>
    dispatch(toggleCancelProductionRequest(id, thunk)),
  finishProduction: (id, thunk) =>
    dispatch(toggleFinishProductionRequest(id, thunk)),
  transportProduction: (id, thunk) =>
    dispatch(toggleTransportProductionRequest(id, thunk))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductionButtons);