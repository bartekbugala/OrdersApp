import React from 'react';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
// components
import EditProduction from '../productionLists.common/EditProduction/EditProductionContainer';
import ProductionsList from '../productionLists.common/ProductionsList/ProductionsList';
import ProductionsListFilter from '../productionLists.common/ProductionsListFilter/ProductionsListFilterContainer';
import Alert from '../../../common/Alert/Alert';
import Spinner from '../../../common/Spinner/Spinner';

class CanceledProductions extends React.Component {
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
    const {
      loadCanceledProductions,
      sortParams,
      dateFilterParams
    } = this.props;
    loadCanceledProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction,
      dateFilterParams
    );
  }

  componentDidUpdate(prevProps) {
    const {
      loadCanceledProductions,
      sortParams,
      canceledProductions,
      dateFilterParams,
      resetNew
    } = this.props;
    if (isEqual(canceledProductions, prevProps.canceledProductions) === false) {
      loadCanceledProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction,
        dateFilterParams
      );
      resetNew();
    }
  }

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
    const { canceledProductions, sortCanceledProductions } = this.props;
    sortCanceledProductions(canceledProductions, key, valueType, direction);
  };

  render() {
    const { handleSort, closeEdit, editHandler } = this;
    const {
      canceledProductions,
      updateRequest,
      request,
      sortParams,
      editedProduction,
      loadCanceledProductions
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
            loadProductions={loadCanceledProductions}
          />
        )}
        <ProductionsListFilter
          startDate={startDate}
          loadProductions={loadCanceledProductions}
          sortParams={sortParams}
        />
        <form onSubmit={this.handleAddForm} autoComplete="off">
          <ProductionsList
            handleSort={handleSort}
            productions={canceledProductions}
            loadProductions={loadCanceledProductions}
            editHandler={editHandler}
          />
        </form>
      </div>
    );
  }
}
export default CanceledProductions;

CanceledProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  canceledProductions: PropTypes.arrayOf(
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
