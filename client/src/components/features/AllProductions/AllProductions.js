import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import formatDate from '../../../utils/formatDate';
import countDaysLeft from '../../../utils/countDaysLeft';
import TheadOrderlist from '../../common/Table/TheadOrderlist/TheadOrderlist';
import './AllProductions.scss';
import EditButton from '../../common/Buttons/EditButton/EditButton';
import ProduceButton from '../../common/Buttons/ProduceButton/ProduceButton';
import TransportButton from '../../common/Buttons/TransportButton/TransportButton';
import DeleteButton from '../../common/Buttons/DeleteButton/DeleteButton';

class AllProductions extends React.Component {
  componentDidMount() {
    const { loadAllProductions } = this.props;
    loadAllProductions();
  }
  finishHandler = id => {
    const { currentToFinished, allProductions } = this.props;
    currentToFinished(allProductions, id);
  };
  render() {
    const { allProductions } = this.props;
    return (
      <form>
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
                /*                 default:
                  daysLeftClass = 'text-success'; */
              }
              return (
                <tr key={production.id}>
                  <td className="pt-3-half">{production.orderNumber}</td>
                  <td className="pt-3-half">{production.clientName}</td>
                  <td className="pt-3-half">
                    {formatDate(production.downpayment)}
                  </td>
                  <td className={`pt-3-half ${daysLeftClass}`}>{daysLeft}</td>
                  <td className="pt-3-half">
                    {production.finalpayment ? (
                      <MdAttachMoney className="text-success" />
                    ) : (
                      <MdMoneyOff className="text-danger" />
                    )}
                  </td>
                  <td className="pt-3-half">{production.type}</td>
                  <td className="pt-3-half">{production.core}</td>
                  <td className="pt-3-half">{production.thickness}</td>
                  <td className="pt-3-half">{production.color}</td>
                  <td className="pt-3-half">{production.m2}</td>
                  <td className="pt-3-half">
                    {panelWidth !== 0
                      ? Math.ceil(production.m2 / panelWidth)
                      : ''}
                  </td>
                  <td className="pt-3-half">{production.csa}</td>
                  <td className="pt-3-half">
                    <EditButton />
                    <ProduceButton
                      clickHandler={() => {
                        this.finishHandler(production.id);
                      }}
                    />
                    <TransportButton />
                    <DeleteButton />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half" contentEditable="true"></td>
              <td className="pt-3-half">
                <span className="mb-3 mr-2">
                  <span role="button" className="text-success">
                    <IoMdAddCircleOutline />
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
export default AllProductions;
