import React from 'react';

// components
import OrderlistThead from '../OrderlistThead/OrderlistThead';

const OrderListTable = ({ children, tableTitle }) => {
  return (
    <table className="table table-bordered table-responsive-md table-hover text-center">
      <OrderlistThead tableTitle={tableTitle} />
      <tbody>{children}</tbody>
    </table>
  );
};
export default OrderListTable;
