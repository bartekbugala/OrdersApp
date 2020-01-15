import React from 'react';
import AddRowButton from '../../Buttons/AddRowButton/AddRowButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const tdClass = 'td-class form-td';

const OrderlistEditProduction = ({
  startDate,
  editedProduction,
  handleChange,
  handleDateChange,
  handleCheckBoxChange,
  handleDateSelect
}) => (
  <form onSubmit={''} autoComplete="off">
    <table>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <label>order Number</label>
          <input name="orderNumber" onChange={handleChange} />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="clientName"
            onChange={handleChange}
            defaultValue={editedProduction.clientName}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          {console.dir(editedProduction.downpayment)}
          <DatePicker
            allowSameDay="true"
            name="downpayment"
            selected={editedProduction.downpayment}
            onChange={handleDateChange}
            onSelect={handleDateSelect}
            defaultValue={
              !isNaN(editedProduction.downpayment)
                ? editedProduction.downpayment
                : startDate
            }
            dateFormat="dd.MM.yyyy"
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="productionTerm"
            onChange={handleChange}
            defaultValue={editedProduction.productionTerm}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="finalPayment"
            type="checkbox"
            defaultValue={editedProduction.finalPayment}
            onChange={handleCheckBoxChange}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="type"
            onChange={handleChange}
            defaultValue={editedProduction.type}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className="form-td">
          <input
            name="colorOutside"
            onChange={handleChange}
            defaultValue={editedProduction.colorOutside}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="colorInside"
            onChange={handleChange}
            defaultValue={editedProduction.colorInside}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="core"
            onChange={handleChange}
            defaultValue={editedProduction.core}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="thickness"
            onChange={handleChange}
            defaultValue={editedProduction.thickness}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="m2"
            onChange={handleChange}
            defaultValue={editedProduction.m2}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}></td>
      </tr>
      <tr className="new-production noprint">
        <td className={`${tdClass}`}>
          <input
            name="csa"
            onChange={handleChange}
            defaultValue={editedProduction.csa}
          />
        </td>
      </tr>
      <tr className="new-production noprint">
        <td className="form-btn">
          <AddRowButton type="submit" />
        </td>
      </tr>
    </table>
  </form>
);

export default OrderlistEditProduction;
