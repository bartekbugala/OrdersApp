import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import { PropTypes } from 'prop-types';
// utils
import formatDate from '../../../utils/formatDate';
import countDaysLeft from '../../../utils/countDaysLeft';
import currentFromSquareMeters from '../../../utils/currentFromSquareMeters';
import cutText from '../../../utils/cutText';
// components
import OrderListTable from '../../common/Table/OrderListTable/OrderListTable';
import OrderlistTrAdd from '../../common/Table/OrderlistTrAdd/OrderlistTrAdd';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../common/Buttons/ProduceButton/ProduceButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import CancelButton from '../../common/Buttons/CancelButton/CancelButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './AllProductions.scss';

class AllProductions extends React.Component {
  constructor(props) {
    super(props);
    let initialNewProduction = {
      clientName: '',
      colorOutside: '',
      colorInside: '',
      core: '',
      csa: '',
      downpayment: null,
      finalPayment: false,
      finished: false,
      canceled: false,
      transported: false,
      m2: null,
      orderNumber: '',
      productionTerm: '',
      thickness: null,
      type: ''
    };
    this.state = {
      allProductions: this.props.allProductions,
      newProduction: initialNewProduction,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadAllProductions } = this.props;
    loadAllProductions().then(
      this.setState({ allProductions: this.props.allProductions })
    );
  }
  componentDidUpdate(props) {
    const { loadAllProductions } = this.props;
    if (props.allProductions !== this.state.allProductions) {
      loadAllProductions().then(
        this.setState({ allProductions: this.props.allProductions })
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

  handleDateSelect = date => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, downpayment: date }
    });
  };

  handleForm = e => {
    e.preventDefault();
    const { addProduction } = this.props;
    const { newProduction } = this.state;
    addProduction(newProduction).then(this.setState({ newProduction: {} }));
  };

  finishHandler = id => {
    const { finishProduction, loadAllProductions } = this.props;
    finishProduction(id).then(loadAllProductions());
  };

  cancelHandler = id => {
    const { cancelProduction, loadAllProductions } = this.props;
    cancelProduction(id).then(loadAllProductions());
  };

  transportHandler = id => {
    const { transportProduction, loadAllProductions } = this.props;
    transportProduction(id).then(loadAllProductions());
  };

  render() {
    const { handleChange, handleDateSelect, handleDateChange } = this;
    const { allProductions, updateRequest } = this.props;
    const { newProduction, startDate } = this.state;
    const tdClass = 'td-class';

    if (updateRequest.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    /*     if (updateRequest.success) return <Alert variant="success">Post has been updated!</Alert>; */ else if (
      updateRequest.pending
    )
      return <Spinner />;
    else
      return (
        <form onSubmit={this.handleForm}>
          <OrderListTable>
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
              }
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
                <tr
                  key={production.id}
                  className={`list-production ${rowBgclass}`}>
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
                  <td className={`${tdClass} list-buttons noprint`}>
                    <span className="buttons-nowrap">
                      <EditButton />
                      {/*                       
                      <ProduceButton
                        clickHandler={() => {
                          this.finishHandler(production.id);
                        }}
                      />
                      <TransportButton
                        clickHandler={() => {
                          this.transportHandler(production.id);
                        }}
                      />
                      <CancelButton
                        clickHandler={() => {
                          this.cancelHandler(production.id);
                        }}
                      /> */}
                    </span>
                  </td>
                </tr>
              );
            })}
            <OrderlistTrAdd
              handleChange={handleChange}
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
export default AllProductions;

AllProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  allProductions: PropTypes.arrayOf(
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
