import React from 'react';
import {
  MdLocalShipping,
  MdEdit,
  MdDelete,
  MdAttachMoney,
  MdMoneyOff,
  MdLayers
} from 'react-icons/md';
import {
  GiFactory,
  GiCalendar,
  GiPayMoney,
  GiReceiveMoney
} from 'react-icons/gi';
import {
  IoMdSettings,
  IoMdAddCircleOutline,
  IoMdColorPalette
} from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';
import { AiOutlineColumnHeight } from 'react-icons/ai';

import './FinishedProductions.scss';

class FinishedProductions extends React.Component {
  render() {
    const { finishedProductions } = this.props;
    return (
      <form>
        <table className="table table-bordered table-responsive-md table-striped table-hover text-center">
          <thead>
            <tr>
              <th className="text-center">Nr</th>
              <th className="text-center">Kontrahent</th>
              <th className="text-center">
                <GiPayMoney />
              </th>
              <th className="text-center">
                <GiCalendar />
              </th>
              <th className="text-center">
                <GiReceiveMoney />
              </th>
              <th className="text-center">Typ</th>
              <th className="text-center">
                <MdLayers />
              </th>
              <th className="text-center">
                <AiOutlineColumnHeight />
              </th>
              <th className="text-center">
                <IoMdColorPalette />
              </th>
              <th className="text-center">
                m<sup>2</sup>
              </th>
              <th className="text-center">m</th>
              <th className="text-center">
                <FaUserTie />
              </th>
              <th className="text-center">
                <IoMdSettings />
              </th>
            </tr>
          </thead>
          <tbody>
            {finishedProductions.map(production => {
              let panelWidth = 0;
              if (production.type === 'D') {
                panelWidth = 1;
              } else if (production.type === 'S') {
                panelWidth = 1.175;
              }
              return (
                <tr key={production.orderNumber}>
                  <td className="pt-3-half">{production.orderNumber}</td>
                  <td className="pt-3-half">{production.clientName}</td>
                  <td className="pt-3-half">{production.downpayment}</td>
                  <td className="pt-3-half">{production.productionTerm}</td>
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
                  <td className="pt-3-half">{production.salesperson}</td>
                  <td className="pt-3-half">
                    <button
                      type="button"
                      className="btn btn-warning btn-rounded btn-sm">
                      <MdEdit />
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-rounded btn-sm ml-1">
                      <GiFactory />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-rounded btn-sm ml-1">
                      <MdLocalShipping />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-rounded btn-sm ml-1">
                      <MdDelete />
                    </button>
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
export default FinishedProductions;
