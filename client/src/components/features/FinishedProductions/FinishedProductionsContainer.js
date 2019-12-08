import { connect } from 'react-redux';
import { getFinishedProductions } from '../../../redux/ordersRedux';
import FinishedProductions from './FinishedProductions';

const mapStateToProps = state => ({
  finishedProductions: getFinishedProductions(state)
});

export default connect(mapStateToProps)(FinishedProductions);
