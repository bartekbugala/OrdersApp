import React from 'react';
import './OrderListTable.scss';

// components
import OrderlistThead from '../OrderlistThead/OrderlistThead';

const OrderListTable = ({ children, tableTitle, numberSort }) => {
  return (
    <table className="table table-bordered table-responsive-md table-hover text-center">
      <OrderlistThead tableTitle={tableTitle} numberSort={numberSort} />
      <tbody>{children}</tbody>
    </table>
  );
};
export default OrderListTable;
