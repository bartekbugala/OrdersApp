import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import formatDate from '../../../utils/formatDate';
import countDaysLeft from '../../../utils/countDaysLeft';
import TheadOrderlist from '../../common/Table/TheadOrderlist/TheadOrderlist';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../common/Buttons/ProduceButton/ProduceButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import DeleteButton from '../../common/Buttons/DeleteButton/DeleteButton';
import AddRowButton from '../../common/Buttons/AddRowButton/AddRowButton';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './AllProductions.scss';

class AllProductions extends React.Component {
  state = {
    newProduction: {
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
  };

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
    addProduction(newProduction);

  };
  finishHandler = id => {
    const { currentToFinished, allProductions } = this.props;
    currentToFinished(allProductions, id);
  };
  render() {
    const { handleChange } = this;
    const { allProductions, updateRequest } = this.props;
    const { newProduction } = this.state;

    if (updateRequest.error) return <Alert variant="error">{`${updateRequest.error}`}</Alert>;
    /*     if (updateRequest.success) return <Alert variant="success">Post has been updated!</Alert>; */
    else if (updateRequest.pending) return <Spinner />;
    else

      return (
        <form onSubmit={this.handleForm}>
          <table className="table table-bordered table-responsive-md table-striped table-hover text-center">
            <TheadOrderlist />
            <tbody>
              {allProductions.map(production => {
                let panelWidth = 0;
                if (production.type === 'D') {
                  panelWidth = 1;
                } else if (production.type === 'S') {
                  panelWidth = 1.175;
                }
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
                    <td className="pt-3-half short-column">
                      {production.orderNumber}
                    </td>
                    <td className="pt-3-half name-column">
                      {production.clientName}
                    </td>
                    <td className="pt-3-half date-column">
                      {formatDate(production.downpayment, true)}
                    </td>
                    <td className={`pt-3-half short-column ${daysLeftClass}`}>
                      {daysLeft}
                    </td>
                    <td className="pt-3-half short-column">
                      {production.finalpayment ? (
                        <MdAttachMoney className="text-success" />
                      ) : (
                          <MdMoneyOff className="text-danger" />
                        )}
                    </td>
                    <td className="pt-3-half short-column">{production.type}</td>
                    <td className="pt-3-half">{production.color}</td>
                    <td className="pt-3-half short-column">{production.core}</td>
                    <td className="pt-3-half short-column">
                      {production.thickness}
                    </td>

                    <td className="pt-3-half">{production.m2}</td>
                    <td className="pt-3-half">
                      {panelWidth !== 0
                        ? Math.ceil(production.m2 / panelWidth)
                        : ''}
                    </td>
                    <td className="pt-3-half short-column">{production.csa}</td>
                    <td className="list-buttons">
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
              <tr className="new-production">
                <td className="form-td">
                  <input
                    name="orderNumber"
                    onChange={handleChange}
                    value={newProduction.orderNumber}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="clientName"
                    onChange={handleChange}
                    value={newProduction.clientName}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="downpayment"
                    onChange={handleChange}
                    value={newProduction.downpayment}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="productionTerm"
                    onChange={handleChange}
                    value={newProduction.productionTerm}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="finalpayment"
                    onChange={handleChange}
                    type="checkbox"
                    value={newProduction.finalpayment}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="type"
                    onChange={handleChange}
                    value={newProduction.type}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="color"
                    onChange={handleChange}
                    value={newProduction.color}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="core"
                    onChange={handleChange}
                    value={newProduction.core}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="thickness"
                    onChange={handleChange}
                    value={newProduction.thickness}
                  />
                </td>
                <td className="form-td">
                  <input
                    name="m2"
                    onChange={handleChange}
                    value={newProduction.m2}
                  />
                </td>
                <td className="form-td"></td>
                <td className="form-td">
                  <input
                    name="csa"
                    onChange={handleChange}
                    value={newProduction.csa}
                  />
                </td>

                {/* <td className="pt-3-half"></td> */}
                <td className="form-btn">
                  <AddRowButton type="submit" /* clickHandler={() => {} }*/ />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      );
  }
}
export default AllProductions;
