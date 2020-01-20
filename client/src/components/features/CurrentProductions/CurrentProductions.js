import React from 'react';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
// components
import AddProduction from '../../features/AddProduction/AddProductionContainer';
import EditProduction from '../../features/EditProduction/EditProductionContainer';
import ProductionsList from '../../features/ProductionsList/ProductionsList';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

class CurrentProductions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateRequest: this.props.updateRequest,
      request: this.props.request,
      isEdited: false,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadCurrentProductions, sortParams } = this.props;
    loadCurrentProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction
    );
  }

  componentDidUpdate(prevProps) {
    const {
      loadCurrentProductions,
      sortParams,
      currentProductions,
      resetNew
    } = this.props;
    if (isEqual(currentProductions, prevProps.currentProductions) === false) {
      loadCurrentProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction
      );
      resetNew();
    }
  }

  handleAddForm = e => {
    e.preventDefault();
    const { addProduction, loadCurrentProductions, newProduction } = this.props;
    addProduction(newProduction, loadCurrentProductions);
  };

  editHandler = id => {
    const { loadEditedProduction } = this.props;
    const loadEdited = async () => {
      await loadEditedProduction(id);
      this.setState({ isEdited: true });
    };
    loadEdited();
  };

  closeEdit = () => {
    this.setState({ isEdited: false });
  };

  handleSort = (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => {
    const { currentProductions } = this.props;
    const { sortCurrentProductions } = this.props;
    sortCurrentProductions(currentProductions, key, valueType, direction);
  };

  render() {
    const { handleSort, closeEdit, editHandler } = this;
    const {
      currentProductions,
      updateRequest,
      request,
      newProduction,
      editedProduction,
      loadCurrentProductions
    } = this.props;
    const { startDate } = this.state;

    if (updateRequest.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (request.pending && updateRequest.pending) return <Spinner />;
    return (
      <div>
        {this.state.isEdited && (
          <EditProduction
            editedProduction={editedProduction}
            startDate={startDate}
            closeEdit={closeEdit}
          />
        )}

        <form onSubmit={this.handleAddForm} autoComplete="off">
          <ProductionsList
            handleSort={handleSort}
            productions={currentProductions}
            newProduction={newProduction}
            loadProductions={loadCurrentProductions}
            editHandler={editHandler}
            startDate={startDate}>
            <AddProduction
              newProduction={newProduction}
              startDate={startDate}
            />
          </ProductionsList>
        </form>
      </div>
    );
  }
}
export default CurrentProductions;

CurrentProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  currentProductions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      orderNumber: PropTypes.string,
      clientName: PropTypes.string,
      downpayment: PropTypes.string,
      productionTerm: PropTypes.number,
      finalPayment: PropTypes.bool,
      finished: PropTypes.bool.isRequired,
      type: PropTypes.string,
      colorOutside: PropTypes.string,
      colorInside: PropTypes.string,
      core: PropTypes.string,
      thickness: PropTypes.number,
      m2: PropTypes.number,
      csa: PropTypes.string
    })
  ),
  loadPostsByPage: PropTypes.func
};
