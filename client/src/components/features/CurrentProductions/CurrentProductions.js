import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import { PropTypes } from 'prop-types';
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
import { isEqual } from 'lodash';

class CurrentProductions extends React.Component {
  constructor(props) {
    super(props);
    let initialNewProduction = {
      clientName: '',
      colorOutside: '',
      colorInside: '',
      core: '',
      csa: '',
      downpayment: 0,
      finalPayment: false,
      finished: false,
      canceled: false,
      transported: false,
      m2: 0,
      orderNumber: '',
      productionTerm: '',
      thickness: 0,
      type: ''
    };
    this.state = {
      currentProductions: [],
      sortBy: 'oderNumber',
      updateRequest: this.props.updateRequest,
      request: this.props.request,
      newProduction: initialNewProduction,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadCurrentProductions } = this.props;
    loadCurrentProductions().then(
      this.setState({
        currentProductions: this.props.currentProductions
      })
    );
  }
  componentDidUpdate() {
    const { loadCurrentProductions } = this.props;
    if (
      isEqual(this.state.currentProductions, this.props.currentProductions) ===
      false
    ) {
      loadCurrentProductions().then(
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
    console.dir(target);
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

  /*   numberSort = (key, direction) => {
    let { currentProductions } = this.state;
    this.setState({
      currentProductions: currentProductions.sort((a, b) =>
        direction === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      direction: {
        [key]: direction === 'asc' ? 'desc' : 'asc'
      }
    });
  }; */

  numberSort = (array, key, direction) => {
    return array.sort((a, b) =>
      direction === 'asc'
        ? parseFloat(a[key]) - parseFloat(b[key])
        : parseFloat(b[key]) - parseFloat(a[key])
    );
  };

  render() {
    const {
      handleChange,
      handleDateSelect,
      handleDateChange,
      handleCheckBoxChange,
      numberSort
    } = this;
    const { updateRequest, request } = this.props;
    const { currentProductions } = this.state;
    const { newProduction, startDate } = this.state;
    const tdClass = 'production-list-td';
    let sortedProductions = this.numberSort(
      currentProductions,
      this.state.sortBy,
      'asc'
    );

    if (updateRequest.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (request.pending && updateRequest.pending) return <Spinner />;
    return (
      <form onSubmit={this.handleForm}>
        <OrderListTable numberSort={() => numberSort('orderNumber', 'asc')}>
          {}
          {sortedProductions.map(production => {
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
      orderNumber: PropTypes.string.isRequired,
      clientName: PropTypes.string.isRequired,
      downpayment: PropTypes.string.isRequired,
      productionTerm: PropTypes.number.isRequired,
      finalPayment: PropTypes.bool.isRequired,
      finished: PropTypes.bool.isRequired,
      type: PropTypes.string.isRequired,
      colorOutside: PropTypes.string.isRequired,
      colorInside: PropTypes.string.isRequired,
      core: PropTypes.string.isRequired,
      thickness: PropTypes.number.isRequired,
      m2: PropTypes.number.isRequired,
      csa: PropTypes.string.isRequired
    })
  ),
  loadPostsByPage: PropTypes.func
};
