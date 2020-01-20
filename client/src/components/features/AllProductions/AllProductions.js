import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import { PropTypes } from 'prop-types';
import { isEqual } from 'lodash';
// utils
import formatDate from '../../../utils/formatDate';
import countDaysLeft from '../../../utils/countDaysLeft';
import currentFromSquareMeters from '../../../utils/currentFromSquareMeters';
import cutText from '../../../utils/cutText';
// components
import OrderListTable from '../../common/OrderList/OrderListTable/OrderListTable';
import AddProduction from '../../features/AddProduction/AddProductionContainer';
import EditProduction from '../../features/EditProduction/EditProductionContainer';
import ProductionButtons from '../../features/ProductionButtons/ProductionButtonsContainer';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './AllProductions.scss';

class AllProductions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateRequest: this.props.updateRequest,
      request: this.props.request,
      isEdited: false,
      request: this.props.request,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadAllProductions, sortParams } = this.props;
    loadAllProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction
    );
  }

  componentDidUpdate(prevProps) {
    const {
      loadAllProductions,
      sortParams,
      allProductions,
      resetNew
    } = this.props;
    if (isEqual(allProductions, prevProps.allProductions) === false) {
      loadAllProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction
      );
      resetNew();
    }
  }

  handleAddForm = e => {
    e.preventDefault();
    const { addProduction, loadAllProductions, newProduction } = this.props;
    addProduction(newProduction, loadAllProductions);
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
    const { allProductions } = this.props;
    const { sortAllProductions } = this.props;
    sortAllProductions(allProductions, key, valueType, direction);
  };

  render() {
    const { handleSort, closeEdit } = this;
    const {
      allProductions,
      updateRequest,
      request,
      newProduction,
      editedProduction,
      loadAllProductions
    } = this.props;
    const { startDate } = this.state;
    const tdClass = 'production-list-td';

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
            />
          )}

          <form onSubmit={this.handleAddForm} autoComplete="off">
            <OrderListTable
              sortColumn={(key, valueType) => {
                handleSort(key, valueType);
              }}>
              {allProductions.map(production => {
                let rowBgclass;
                switch (true) {
                  case production.canceled === true:
                    rowBgclass = 'row-production-canceled';
                    break;
                  case production.transported === true:
                    rowBgclass = 'row-production-transported';
                    break;
                  case production.finished === true:
                    rowBgclass = 'row-production-finished';
                    break;
                  default:
                    break;
                }
                let daysLeft =
                  countDaysLeft(
                    production.downpayment,
                    production.productionTerm
                  ) || '';
                let daysLeftClass = 'text-default';
                switch (true) {
                  case daysLeft <= 7 && daysLeft > 2:
                    daysLeftClass = 'text-warning';
                    break;
                  case daysLeft < 3:
                    daysLeftClass = 'text-danger';
                    break;
                  default:
                    daysLeftClass = 'text-default';
                }
                return (
                  <tr
                    key={production.id}
                    className={`production-list ${rowBgclass}`}>
                    <td className={`${tdClass} short-column`}>
                      {production.orderNumber}
                    </td>
                    <td className={`${tdClass} name-column`}>
                      {cutText(production.clientName, 25)}
                    </td>
                    <td className={`${tdClass} date-column`}>
                      {formatDate(production.downpayment)}
                    </td>
                    <td className={`${tdClass} short-column ${daysLeftClass}`}>
                      {daysLeft}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.finalPayment === true ? (
                        <MdAttachMoney className="text-success" />
                      ) : (
                        <MdMoneyOff className="text-danger" />
                      )}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.type}
                    </td>
                    <td className={`${tdClass}`}>{production.colorOutside}</td>
                    <td className={`${tdClass}`}>{production.colorInside}</td>
                    <td className={`${tdClass} short-column`}>
                      {production.core}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.thickness}
                    </td>

                    <td className={`${tdClass}`}>{production.m2}</td>
                    <td className={`${tdClass}`}>
                      {currentFromSquareMeters(production.type, production.m2)}
                    </td>
                    <td className={`${tdClass} short-column`}>
                      {production.csa}
                    </td>
                    <td
                      className={`${tdClass} production-list-buttons noprint`}>
                      <ProductionButtons
                        production={production}
                        loadProductions={loadAllProductions}
                        editHandler={this.editHandler}
                      />
                    </td>
                  </tr>
                );
              })}
              <AddProduction
                newProduction={newProduction}
                startDate={startDate}
              />
            </OrderListTable>
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
