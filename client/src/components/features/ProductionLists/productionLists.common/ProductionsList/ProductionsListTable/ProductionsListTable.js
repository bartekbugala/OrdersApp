import React from 'react';
import './ProductionsListTable.scss';

// components
import ProductionsListThead from './ProductionsListThead/ProductionsListThead';

const ProductionsListTable = ({ children, tableTitle, sortColumn }) => {
  return (
    <table className="table table-bordered table-responsive-md table-hover text-center">
      <ProductionsListThead tableTitle={tableTitle} sortColumn={sortColumn} />
      <tbody>{children}</tbody>
    </table>
  );
};
export default ProductionsListTable;
