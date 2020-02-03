import React from 'react';
import { MdAttachMoney, MdMoneyOff } from 'react-icons/md';
// utils
import formatDate from '../../../utils/formatDate';
import countDaysLeft from '../../../utils/countDaysLeft';
import currentFromSquareMeters from '../../../utils/currentFromSquareMeters';
import cutText from '../../../utils/cutText';
// components
import OrderListTable from '../../common/OrderList/OrderListTable/OrderListTable';
import ProductionButtons from '../../features/ProductionButtons/ProductionButtonsContainer';

const tdClass = 'production-list-td';
const ProductionsList = ({
  productions,
  handleSort,
  loadProductions,
  editHandler,
  children
}) => {
  return (
    <OrderListTable
      sortColumn={(key, valueType) => {
        handleSort(key, valueType);
      }}>
      {productions.map(production => {
        let rowBgclass;
        let daysLeft =
          countDaysLeft(production.downpayment, production.productionTerm) ||
          '';
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
          default:
            break;
        }

        let daysLeftClass = 'bg-default';
        switch (true) {
          case daysLeft <= 7 &&
            daysLeft > 2 &&
            !production.canceled &&
            !production.transported:
            daysLeftClass = 'bg-warning';
            break;
          case daysLeft < 3 && !production.canceled && !production.transported:
            daysLeftClass = 'bg-danger font-weight-bold';
            break;
          default:
            daysLeftClass = 'bg-default';
        }
        return (
          <tr key={production.id} className={`production-list ${rowBgclass}`}>
            <td className={`${tdClass} short-column`}>
              {production.orderNumber}
            </td>
            <td className={`${tdClass} name-column`}>
              {cutText(production.clientName, 25)}
            </td>
            <td className={`${tdClass} date-column`}>
              {production.downpayment !== null
                ? formatDate(production.downpayment)
                : ''}
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
              <ProductionButtons
                production={production}
                loadProductions={loadProductions}
                editHandler={editHandler}
              />
            </td>
          </tr>
        );
      })}
      {children}
    </OrderListTable>
  );
};

export default ProductionsList;
