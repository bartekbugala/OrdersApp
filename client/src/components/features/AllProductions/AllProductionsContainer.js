import { connect } from 'react-redux';
import {
  getAllProductions,
  loadProductionsRequest,
  addProductionRequest,
  currentToFinished
} from '../../../redux/ordersRedux';
import AllProductions from './AllProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state)
});

const mapDispatchToProps = dispatch => ({
  loadAllProductions: () => dispatch(loadProductionsRequest()),
  addProduction: production => dispatch(addProductionRequest(production)),
  currentToFinished: (currArr, id) => dispatch(currentToFinished(currArr, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductions);
