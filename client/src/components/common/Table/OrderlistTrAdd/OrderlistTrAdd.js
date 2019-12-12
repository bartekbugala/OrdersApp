import React from 'react';
import AddRowButton from '../../Buttons/AddRowButton/AddRowButton';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const OrderlistTrAdd = ({
  startDate,
  newProduction,
  handleChange,
  handleDateChange,
  handleDateSelect
}) => (
  <tr className="new-production noprint">
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
      <DatePicker
        allowSameDay="true"
        name="downpayment"
        selected={newProduction.downpayment}
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        value={
          newProduction.downpayment !== NaN
            ? newProduction.downpayment
            : startDate
        }
        dateFormat="dd.MM.yy"
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
      <input name="finalpayment" type="checkbox" value={true} />
    </td>
    <td className="form-td">
      <input name="type" onChange={handleChange} value={newProduction.type} />
    </td>
    <td className="form-td">
      <input
        name="colorOutside"
        onChange={handleChange}
        value={newProduction.colorOutside}
      />
    </td>
    <td className="form-td">
      <input
        name="colorInside"
        onChange={handleChange}
        value={newProduction.colorInside}
      />
    </td>
    <td className="form-td">
      <input name="core" onChange={handleChange} value={newProduction.core} />
    </td>
    <td className="form-td">
      <input
        name="thickness"
        onChange={handleChange}
        value={newProduction.thickness}
      />
    </td>
    <td className="form-td">
      <input name="m2" onChange={handleChange} value={newProduction.m2} />
    </td>
    <td className="form-td"></td>
    <td className="form-td">
      <input name="csa" onChange={handleChange} value={newProduction.csa} />
    </td>
    <td className="form-btn">
      <AddRowButton type="submit" />
    </td>
  </tr>
);

export default OrderlistTrAdd;
