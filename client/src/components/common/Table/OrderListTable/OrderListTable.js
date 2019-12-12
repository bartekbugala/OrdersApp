import React from 'react';

// components
import OrderlistThead from '../OrderlistThead/OrderlistThead';

const OrderListTable = ({ children }) => (

    <table className="table table-bordered table-responsive-md table-striped table-hover text-center">
        <OrderlistThead />
        <tbody>
            {children}
        </tbody>
    </table>
)
export default OrderListTable;
