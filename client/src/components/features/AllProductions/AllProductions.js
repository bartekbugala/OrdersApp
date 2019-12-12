import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
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
import DeleteButton from '../../common/Buttons/DeleteButton/DeleteButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './AllProductions.scss';

class AllProductions extends React.Component {
  constructor(props) {
    super(props);
    let initialNewProduction = {
      clientName: '',
      color: '',
      core: '',
      csa: '',
      downpayment: '',
      finalpayment: false,
      finished: false,
      m2: '',
      orderNumber: '',
      productionTerm: '',
      thickness: '',
      type: ''
    }
    this.state = { newProduction: initialNewProduction }
  }

  componentDidMount() {
    const { loadAllProductions, resetRequest } = this.props;
    loadAllProductions();
    resetRequest();
  };

  componentDidUpdate() {
    const { loadAllProductions } = this.props;
    loadAllProductions();

  }

  handleChange = e => {
    const { newProduction } = this.state;
    this.setState({
      newProduction: { ...newProduction, [e.target.name]: e.target.value }
    });
  };

  handleForm = e => {
    e.preventDefault();
    const { addProduction } = this.props;
    const { newProduction } = this.state;
    addProduction(newProduction).then(this.setState({ newProduction: {} }));

  };
  finishHandler = id => {
    const { currentToFinished, allProductions } = this.props;
    currentToFinished(allProductions, id);
  };
  render() {
    const { handleChange } = this;
    const { allProductions, updateRequest } = this.props;
    const { newProduction } = this.state;
    const tdClass = ''

    if (updateRequest.error) return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    /*     if (updateRequest.success) return <Alert variant="success">Post has been updated!</Alert>; */
    else if (updateRequest.pending) return <Spinner />;
    else

      return (
        <form onSubmit={this.handleForm}>
          <OrderListTable>
            {allProductions.map(production => {
              let daysLeft = countDaysLeft(
                formatDate(production.downpayment),
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
                    {formatDate(production.downpayment, true)}
                  </td>
                  <td className={`${tdClass} short-column ${daysLeftClass}`}>
                    {daysLeft}
                  </td>
                  <td className={`${tdClass} short-column`}>
                    {production.finalpayment ? (
                      <MdAttachMoney className="text-success" />
                    ) : (
                        <MdMoneyOff className="text-danger" />
                      )}
                  </td>
                  <td className={`${tdClass} short-column`}>{production.type}</td>
                  <td className={`${tdClass}`}>{production.color}</td>
                  <td className={`${tdClass} short-column`}>{production.core}</td>
                  <td className={`${tdClass} short-column`}>
                    {production.thickness}
                  </td>

                  <td className={`${tdClass}`}>{production.m2}</td>
                  <td className={`${tdClass}`}>
                    {currentFromSquareMeters(production.type, production.m2)}
                  </td>
                  <td className={`${tdClass} short-column`}>{production.csa}</td>
                  <td className="list-buttons noprint">
                    <span className="buttons-nowrap">
                      <EditButton />
                      <ProduceButton
                        clickHandler={() => {
                          this.finishHandler(production.id);
                        }}
                      />
                      <TransportButton />
                      <DeleteButton />
                    </span>
                  </td>
                </tr>
              );
            })}
            <OrderlistTrAdd handleChange={handleChange} newProduction={newProduction} />
          </OrderListTable>
        </form>
      );
  }
}
export default AllProductions;
