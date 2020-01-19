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
import OrderlistTrAdd from '../../common/OrderList/OrderlistTrAdd/OrderlistTrAdd';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../common/Buttons/ProduceButton/ProduceButton';
import CancelButton from '../../common/Buttons/CancelButton/CancelButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

class CurrentProductions extends React.Component {
  constructor(props) {
    super(props);
    let initialNewProduction = {
      orderNumber: '',
      clientName: '',
      downpayment: '',
      productionTerm: '',
      finalPayment: false,
      type: '',
      colorOutside: '',
      colorInside: '',
      core: '',
      thickness: '',
      finished: false,
      canceled: false,
      transported: false,
      m2: '',
      csa: ''
    };
    this.state = {
      currentProductions: this.props.currentProductions,
      updateRequest: this.props.updateRequest,
      request: this.props.request,
      newProduction: initialNewProduction,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadCurrentProductions, sortParams } = this.props;
    loadCurrentProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction
    ).then(
      this.setState({
        currentProductions: this.props.currentProductions
      })
    );
  }
  componentDidUpdate() {
    const { loadCurrentProductions, sortParams } = this.props;
    if (
      isEqual(this.state.currentProductions, this.props.currentProductions) ===
      false
    ) {
      loadCurrentProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction
      ).then(
        this.setState({ currentProductions: this.props.currentProductions })
      );
    }
  }

  handleChange = e => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, [e.target.name]: e.target.value }
    });
  };

  handleDateChange = date => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, downpayment: date }
    });
  };

  handleCheckBoxChange = e => {
    const { newProduction } = this.state;
    const target = e.target;
    this.setState({
      newProduction: {
        ...newProduction,
        finalPayment: target.checked === true ? true : false
      }
    });
  };

  handleDateSelect = date => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, downpayment: date }
    });
  };

  handleForm = e => {
    e.preventDefault();
    const { addProduction, loadCurrentProductions } = this.props;
    const { newProduction } = this.state;
    addProduction(newProduction, loadCurrentProductions).then(
      this.setState({ newProduction: {} })
    );
  };

  finishHandler = id => {
    const { finishProduction, loadCurrentProductions } = this.props;
    finishProduction(id, loadCurrentProductions);
  };

  cancelHandler = id => {
    const { cancelProduction, loadCurrentProductions } = this.props;
    cancelProduction(id, loadCurrentProductions);
  };

  handleSort = (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => {
    const { currentProductions } = this.state;
    const { sortCurrentProductions } = this.props;
    sortCurrentProductions(currentProductions, key, valueType, direction);
  };

  render() {
    const {
      handleChange,
      handleDateSelect,
      handleDateChange,
      handleCheckBoxChange,
      handleSort
    } = this;
    const { updateRequest, request } = this.props;
    const { currentProductions, newProduction, startDate } = this.state;
    const tdClass = 'production-list-td';

    if (updateRequest.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (request.pending && updateRequest.pending) return <Spinner />;
    return (
      <form onSubmit={this.handleForm} autoComplete="off">
        <OrderListTable
          sortColumn={(key, valueType) => {
            handleSort(key, valueType);
          }}>
          {currentProductions.map(production => {
            let daysLeft = countDaysLeft(
              production.downpayment,
              production.productionTerm
            );
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
              <tr key={production.id} className="production-list">
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
                <td className={`${tdClass} short-column`}>{production.type}</td>
                <td className={`${tdClass}`}>{production.colorOutside}</td>
                <td className={`${tdClass}`}>{production.colorInside}</td>
                <td className={`${tdClass} short-column`}>{production.core}</td>
                <td className={`${tdClass} short-column`}>
                  {production.thickness}
                </td>

                <td className={`${tdClass}`}>{production.m2}</td>
                <td className={`${tdClass}`}>
                  {currentFromSquareMeters(production.type, production.m2)}
                </td>
                <td className={`${tdClass} short-column`}>{production.csa}</td>
                <td className={`${tdClass} production-list-buttons noprint`}>
                  <span className="buttons-nowrap">
                    <EditButton />
                    <ProduceButton
                      clickHandler={() => {
                        this.finishHandler(production.id);
                      }}
                    />
                    <CancelButton
                      clickHandler={() => {
                        this.cancelHandler(production.id);
                      }}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
          <OrderlistTrAdd
            handleChange={handleChange}
            handleCheckBoxChange={handleCheckBoxChange}
            newProduction={newProduction}
            handleDateChange={handleDateChange}
            handleDateSelect={handleDateSelect}
            startDate={startDate}
          />
        </OrderListTable>
      </form>
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
