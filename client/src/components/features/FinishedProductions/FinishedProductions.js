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
import EditButton from '../../common/Buttons/EditButton/EditButton';
import RestoreButton from '../../common/Buttons/RestoreButton/RestoreButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

class FinishedProductions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finishedProductions: this.props.finishedProductions,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadFinishedProductions, sortParams } = this.props;
    loadFinishedProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction
    ).then(
      this.setState({
        finishedProductions: this.props.finishedProductions
      })
    );
  }

  componentDidUpdate() {
    const { loadFinishedProductions, sortParams } = this.props;
    if (
      isEqual(
        this.state.finishedProductions,
        this.props.finishedProductions
      ) === false
    ) {
      loadFinishedProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction
      ).then(
        this.setState({ finishedProductions: this.props.finishedProductions })
      );
    }
  }

  finishHandler = id => {
    const { finishProduction, loadFinishedProductions } = this.props;
    finishProduction(id, loadFinishedProductions);
  };

  transportHandler = id => {
    const { transportProduction, loadFinishedProductions } = this.props;
    transportProduction(id, loadFinishedProductions);
  };

  handleSort = (
    key = 'orderNumber',
    valueType = 'number',
    direction = 'asc'
  ) => {
    const { finishedProductions } = this.state;
    const { sortFinishedProductions } = this.props;
    sortFinishedProductions(finishedProductions, key, valueType, direction);
  };

  render() {
    const { handleSort } = this;
    const { finishedProductions } = this.state;
    const { updateRequest, request } = this.props;
    const tdClass = 'production-list-td';

    if (updateRequest.error || request.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (updateRequest.pending && request.pending) return <Spinner />;
    return (
      <OrderListTable
        sortColumn={(key, valueType) => {
          handleSort(key, valueType);
        }}>
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
                  <TransportButton
                    clickHandler={() => {
                      this.transportHandler(production.id);
                    }}
                  />
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
