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
import DeleteButton from '../../common/Buttons/DeleteButton/DeleteButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

class CanceledProductions extends React.Component {
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
      canceledProductions: [],
      newProduction: initialNewProduction,
      startDate: new Date()
    };
  }

  componentDidMount() {
    const { loadCanceledProductions } = this.props;
    loadCanceledProductions().then(
      this.setState({ canceledProductions: this.props.canceledProductions })
    );
  }
  componentDidUpdate(props) {
    const { loadCanceledProductions } = this.props;
    if (props.canceledProductions !== this.state.canceledProductions) {
      loadCanceledProductions().then(
        this.setState({ canceledProductions: this.props.canceledProductions })
      );
    }
  }
  cancelHandler = id => {
    const { cancelProduction, loadCanceledProductions } = this.props;
    cancelProduction(id).then(loadCanceledProductions());
  };

  deleteHandler = id => {
    const { deleteProduction, loadCanceledProductions } = this.props;
    deleteProduction(id).then(loadCanceledProductions());
  };

  render() {
    const { updateRequest, request, canceledProductions } = this.props;
    const tdClass = 'production-list-td';

    if (updateRequest.error || request.error)
      return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    else if (updateRequest.pending || request.pending) return <Spinner />;
    else
      return (
        <OrderListTable>
          {canceledProductions.map(production => {
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
                    <RestoreButton
                      clickHandler={() => {
                        this.cancelHandler(production.id);
                      }}
                    />
                    <DeleteButton
                      clickHandler={() => {
                        this.deleteHandler(production.id);
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

export default CanceledProductions;

CanceledProductions.propTypes = {
  updateRequest: PropTypes.object.isRequired,
  canceledProductions: PropTypes.arrayOf(
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
