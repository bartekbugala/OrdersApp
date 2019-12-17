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
import EditButton from '../../common/Buttons/EditButton/EditButton';
import RestoreButton from '../../common/Buttons/RestoreButton/RestoreButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './FinishedProductions.scss';

class FinishedProductions extends React.Component {
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
      m2: null,
      orderNumber: '',
      productionTerm: '',
      thickness: null,
      type: ''
    };
    this.state = {
      finishedProductions: [],
      newProduction: initialNewProduction,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadFinishedProductions } = this.props;
    loadFinishedProductions().then(
      this.setState({ finishedProductions: this.props.finishedProductions })
    );
  }
  componentDidUpdate(props) {
    const { loadFinishedProductions } = this.props;
    if (props.finishedProductions !== this.state.finishedProductions) {
      loadFinishedProductions().then(
        this.setState({ finishedProductions: this.props.finishedProductions })
      );
    }
  }
  finishHandler = id => {
    const { finishProduction, loadFinishedProductions } = this.props;
    finishProduction(id).then(loadFinishedProductions());
  };

  render() {
    const { updateRequest, request, finishedProductions } = this.props;
    const tdClass = 'td-class';

    if (updateRequest.error || request.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (updateRequest.pending || request.pending) return <Spinner />;
    else
      return (
        <OrderListTable>
          {finishedProductions.map(production => {
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
              <tr key={production.id} className="list-production">
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
                    <TransportButton />
                    <RestoreButton
                      clickHandler={() => {
                        this.finishHandler(production.id);
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

export default FinishedProductions;

FinishedProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  finishedProductions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      orderNumber: PropTypes.string.isRequired,
      clientName: PropTypes.string.isRequired,
      downpayment: PropTypes.object.isRequired,
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
