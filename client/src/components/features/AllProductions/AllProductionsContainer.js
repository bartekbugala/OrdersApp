import { connect } from 'react-redux';
import { getAllProductions } from '../../../redux/ordersRedux';
import AllProductions from './AllProductions';

const mapStateToProps = state => ({
  allProductions: getAllProductions(state)
});

export default connect(mapStateToProps)(AllProductions);
