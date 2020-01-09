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
import EditButton from '../../common/Buttons/EditButton/EditButton';
import RestoreButton from '../../common/Buttons/RestoreButton/RestoreButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import { isEqual } from 'lodash';

class TransportedProductions extends React.Component {
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
      transported: false,
      m2: null,
      orderNumber: '',
      productionTerm: '',
      thickness: null,
      type: ''
    };
    this.state = {
      transportedProductions: [],
      newProduction: initialNewProduction,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadTransportedProductions } = this.props;
    loadTransportedProductions().then(
      this.setState({
        loadTransportedProductions: this.props.loadTransportedProductions
      })
    );
  }
  componentDidUpdate() {
    const { loadTransportedProductions } = this.props;
    if (
      isEqual(
        this.state.transportedProductions,
        this.props.transportedProductions
      ) === false
    ) {
      loadTransportedProductions().then(
        this.setState({
          transportedProductions: this.props.transportedProductions
        })
      );
    }
  }

  transportHandler = id => {
    const { transportProduction, loadTransportedProductions } = this.props;
    transportProduction(id, loadTransportedProductions);
  };

  render() {
    const { updateRequest, request, transportedProductions } = this.props;
    const tdClass = 'production-list-td';

    if (updateRequest.error || request.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (updateRequest.pending && request.pending) return <Spinner />;
    return (
      <OrderListTable>
        {transportedProductions.map(production => {
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
              <td className={`${tdClass} list-buttons noprint`}>
                <span className="buttons-nowrap">
                  <EditButton />

                  <RestoreButton
                    clickHandler={() => {
                      this.transportHandler(production.id);
                    }}
                  />
                </span>
              </td>
            </tr>
          );
        })}
      </OrderListTable>
    );
  }
}

export default TransportedProductions;

TransportedProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  TransportedProductions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      orderNumber: PropTypes.string.isRequired,
      clientName: PropTypes.string.isRequired,
      downpayment: PropTypes.object.isRequired,
      productionTerm: PropTypes.number.isRequired,
      finalPayment: PropTypes.bool.isRequired,
      transported: PropTypes.bool.isRequired,
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
