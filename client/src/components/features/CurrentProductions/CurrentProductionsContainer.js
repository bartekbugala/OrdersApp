import { connect } from 'react-redux';
import { getAllProductions } from '../../../redux/ordersRedux';
import CurrentProductions from './CurrentProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state)
});

export default connect(mapStateToProps)(CurrentProductions);
