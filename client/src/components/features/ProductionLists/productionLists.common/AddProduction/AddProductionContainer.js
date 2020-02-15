import { connect } from 'react-redux';
import { updateNew } from '../../../../../redux/thunks/productions.thunks';
import AddProduction from './AddProduction';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateNew: newProduction => dispatch(updateNew(newProduction))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduction);
