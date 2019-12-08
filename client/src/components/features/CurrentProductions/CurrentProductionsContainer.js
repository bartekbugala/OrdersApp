import { connect } from 'react-redux';
import {
  getCurrentProductions,
  currentToFinished
} from '../../../redux/ordersRedux';
import CurrentProductions from './CurrentProductions';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state)
});

const mapDispatchToProps = dispatch => ({
  currentToFinished: (currArr, id) => dispatch(currentToFinished(currArr, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProductions);
