import React from 'react';
import AddRowButton from '../../Buttons/AddRowButton/AddRowButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const tdClass = 'td-class form-td';

const OrderlistTrAdd = ({
  startDate,
  newProduction,
  handleChange,
  handleDateChange,
  handleDateSelect,
  handleCheckBoxChange
}) => (
  <tr className="new-production noprint">
    <td className={`${tdClass}`}>
      <input
        name="orderNumber"
        onChange={handleChange}
        value={newProduction.orderNumber}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="clientName"
        onChange={handleChange}
        value={newProduction.clientName}
      />
    </td>
    <td className={`${tdClass}`}>
      <DatePicker
        allowSameDay="true"
        name="downpayment"
        selected={newProduction.downpayment}
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        value={
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
        value={newProduction.productionTerm}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="finalPayment"
        type="checkbox"
        checked={newProduction.finalPayment}
        onChange={handleCheckBoxChange}
      />
    </td>
    <td className={`${tdClass}`}>
      <input name="type" onChange={handleChange} value={newProduction.type} />
    </td>
    <td className="form-td">
      <input
        name="colorOutside"
        onChange={handleChange}
        value={newProduction.colorOutside}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="colorInside"
        onChange={handleChange}
        value={newProduction.colorInside}
      />
    </td>
    <td className={`${tdClass}`}>
      <input name="core" onChange={handleChange} value={newProduction.core} />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="thickness"
        onChange={handleChange}
        value={newProduction.thickness}
      />
    </td>
    <td className={`${tdClass}`}>
      <input name="m2" onChange={handleChange} value={newProduction.m2} />
    </td>
    <td className={`${tdClass}`}></td>
    <td className={`${tdClass}`}>
      <input name="csa" onChange={handleChange} value={newProduction.csa} />
    </td>
    <td className="form-btn">
      <AddRowButton type="submit" />
    </td>
  </tr>
);

export default OrderlistTrAdd;
