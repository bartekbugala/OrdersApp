import React from 'react';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
// components
import EditProduction from '../../features/EditProduction/EditProductionContainer';
import ProductionsList from '../../features/ProductionsList/ProductionsList';
import ProductionsListFilter from '../../features/ProductionsListFilter/ProductionsListFilterContainer';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

class TransportedProductions extends React.Component {
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
      loadTransportedProductions,
      sortParams,
      dateFilterParams
    } = this.props;
    loadTransportedProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction,
      dateFilterParams
    );
  }

  componentDidUpdate(prevProps) {
    const {
      loadTransportedProductions,
      sortParams,
      transportedProductions,
      dateFilterParams
    } = this.props;
    if (
      isEqual(transportedProductions, prevProps.transportedProductions) ===
      false
    ) {
      loadTransportedProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction,
        dateFilterParams
      );
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
    const { transportedProductions } = this.props;
    const { sortTransportedProductions } = this.props;
    sortTransportedProductions(
      transportedProductions,
      key,
      valueType,
      direction
    );
  };

  render() {
    const { handleSort, closeEdit, editHandler } = this;
    const {
      transportedProductions,
      updateRequest,
      request,
      editedProduction,
      sortParams,
      loadTransportedProductions
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
            loadProductions={loadTransportedProductions}
          />
        )}
        <ProductionsListFilter
          startDate={startDate}
          loadProductions={loadTransportedProductions}
          sortParams={sortParams}
        />
        <form onSubmit={this.handleAddForm} autoComplete="off">
          <ProductionsList
            handleSort={handleSort}
            productions={transportedProductions}
            loadProductions={loadTransportedProductions}
            editHandler={editHandler}
            startDate={startDate}
          />
        </form>
      </div>
    );
  }
}
export default TransportedProductions;
TransportedProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  transportedProductions: PropTypes.arrayOf(
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
