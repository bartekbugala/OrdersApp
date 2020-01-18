import React from 'react';
import AddRowButton from '../../Buttons/AddRowButton/AddRowButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const tdClass = 'td-class form-td';

const OrderlistTrAdd = ({
  startDate,
  newProduction,
  handleChange,
  handleCheckBoxChange,
  handleDateSelect
}) => (
  <tr className="new-production noprint">
    <td className={`${tdClass}`}>
      <input
        name="orderNumber"
        onChange={handleChange}
        defaultValue={newProduction.orderNumber}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="clientName"
        onChange={handleChange}
        defaultValue={newProduction.clientName}
      />
    </td>
    <td className={`${tdClass}`}>
      <DatePicker
        allowSameDay="true"
        name="downpayment"
        selected={newProduction.downpayment}
        onSelect={handleDateSelect}
        defaultValue={
          !isNaN(newProduction.downpayment)
            ? newProduction.downpayment
            : startDate
        }
        dateFormat="dd.MM.yy"
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="productionTerm"
        onChange={handleChange}
        defaultValue={newProduction.productionTerm}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="finalPayment"
        type="checkbox"
        defaultValue={newProduction.finalPayment}
        onChange={handleCheckBoxChange}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="type"
        onChange={handleChange}
        defaultValue={newProduction.type}
      />
    </td>
    <td className="form-td">
      <input
        name="colorOutside"
        onChange={handleChange}
        defaultValue={newProduction.colorOutside}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="colorInside"
        onChange={handleChange}
        defaultValue={newProduction.colorInside}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="core"
        onChange={handleChange}
        defaultValue={newProduction.core}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="thickness"
        onChange={handleChange}
        defaultValue={newProduction.thickness}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="m2"
        onChange={handleChange}
        defaultValue={newProduction.m2}
      />
    </td>
    <td className={`${tdClass}`}></td>
    <td className={`${tdClass}`}>
      <input
        name="csa"
        onChange={handleChange}
        defaultValue={newProduction.csa}
      />
    </td>
    <td className="form-btn">
      <AddRowButton type="submit" />
    </td>
  </tr>
);

export default OrderlistTrAdd;
