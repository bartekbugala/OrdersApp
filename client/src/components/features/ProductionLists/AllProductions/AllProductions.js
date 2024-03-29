import React from 'react';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
// components
import AddProduction from '../productionLists.common/AddProduction/AddProductionContainer';
import EditProduction from '../productionLists.common/EditProduction/EditProductionContainer';
import ProductionsList from '../productionLists.common/ProductionsList/ProductionsList';
import ProductionsListFilter from '../productionLists.common/ProductionsListFilter/ProductionsListFilterContainer';
import Alert from '../../../common/Alert/Alert';
import Spinner from '../../../common/Spinner/Spinner';
import './AllProductions.scss';

class AllProductions extends React.Component {
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
    const { loadAllProductions, sortParams, dateFilterParams } = this.props;
    loadAllProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction,
      dateFilterParams
    );
  }

  componentDidUpdate(prevProps) {
    const {
      loadAllProductions,
      sortParams,
      allProductions,
      dateFilterParams,
      resetNew
    } = this.props;
    if (isEqual(allProductions, prevProps.allProductions) === false) {
      loadAllProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction,
        dateFilterParams
      );
      resetNew();
    }
  }

  handleAddForm = e => {
    e.preventDefault();
    const { addProduction, loadAllProductions, newProduction } = this.props;
    addProduction(newProduction).then(loadAllProductions);
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
    const { allProductions, sortAllProductions } = this.props;
    sortAllProductions(allProductions, key, valueType, direction);
  };

  render() {
    const { handleSort, closeEdit, editHandler, handleAddForm } = this;
    const {
      allProductions,
      updateRequest,
      request,
      newProduction,
      editedProduction,
      sortParams,
      loadAllProductions
    } = this.props;
    const { startDate } = this.state;

    if (updateRequest.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (updateRequest.pending && request.pending) return <Spinner />;
    else
      return (
        <div>
          {this.state.isEdited && (
            <EditProduction
              editedProduction={editedProduction}
              startDate={startDate}
              closeEdit={closeEdit}
              loadProductions={loadAllProductions}
            />
          )}
          {
            <ProductionsListFilter
              startDate={startDate}
              loadProductions={loadAllProductions}
              sortParams={sortParams}
            />
          }

          <form
            onKeyDown={e => {
              e.keyCode === 13 ? e.preventDefault() : (e.returnValue = false);
            }}
            onSubmit={handleAddForm}
            autoComplete="off">
            <ProductionsList
              handleSort={handleSort}
              productions={allProductions}
              newProduction={newProduction}
              loadProductions={loadAllProductions}
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
export default AllProductions;

AllProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  allProductions: PropTypes.arrayOf(
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
