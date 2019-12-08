import { connect } from 'react-redux';
import { getCurrentProductions } from '../../../redux/ordersRedux';
import CurrentProductions from './CurrentProductions';

const mapStateToProps = state => ({
  currentProductions: getCurrentProductions(state)
});

export default connect(mapStateToProps)(CurrentProductions);
