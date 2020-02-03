import { connect } from 'react-redux';
import ProductionsListFilter from './ProductionsListFilter';
import { getDateFilterParams } from '../../../redux/selectors';
import { setDateFilterParams } from '../../../redux/actions/productionsActions';

const mapStateToProps = state => ({
  dateFilterParams: getDateFilterParams(state)
});

const mapDispatchToProps = dispatch => ({
  setDateFilterParams: dateFilterParams =>
    dispatch(setDateFilterParams(dateFilterParams))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductionsListFilter);
