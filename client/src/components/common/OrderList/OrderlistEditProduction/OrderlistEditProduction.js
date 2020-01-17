import React from 'react';
import ConfirmButton from '../../Buttons/ConfirmButton/ConfirmButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './OrderlistEditProduction.scss';

const tdClass = 'td-class form-td';

const OrderlistEditProduction = ({
  startDate,
  editedProduction,
  handleChange,
  handleDateChange,
  handleCheckBoxChange,
  handleDateSelect,
  handleForm
}) => (
  <form onSubmit={handleForm} autoComplete="off">
    <table className="edit-production-table">
      <tbody>
        <tr className="edit-production noprint">
          <td className={`${tdClass}`}>
            <label>Nr. zamówienia</label>
            <input
              name="orderNumber"
              onChange={handleChange}
              defaultValue={editedProduction.orderNumber}
            />
          </td>
        </tr>
        <tr className="edit-production noprint">
          <td className={`${tdClass}`}>
            <label>Nazwa klienta</label>
            <input
              name="clientName"
              onChange={handleChange}
              defaultValue={editedProduction.clientName}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Data wpłaty zaliczki</label>
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
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Termin produkcji</label>
            <input
              name="productionTerm"
              onChange={handleChange}
              defaultValue={editedProduction.productionTerm}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Wpłata końcowa</label>
            <input
              name="finalPayment"
              type="checkbox"
              defaultValue={editedProduction.finalPayment}
              onChange={handleCheckBoxChange}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Typ płyty (D,S,SP)</label>
            <input
              name="type"
              onChange={handleChange}
              defaultValue={editedProduction.type}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className="form-td">
            <label>Kolor zewnętrzny</label>
            <input
              name="colorOutside"
              onChange={handleChange}
              defaultValue={editedProduction.colorOutside}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Kolor wewnętrzny</label>
            <input
              name="colorInside"
              onChange={handleChange}
              defaultValue={editedProduction.colorInside}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Rdzeń (St, Wm, XPS, PUR)</label>
            <input
              name="core"
              onChange={handleChange}
              defaultValue={editedProduction.core}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Grubość (mm)</label>
            <input
              name="thickness"
              onChange={handleChange}
              defaultValue={editedProduction.thickness}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Ilość m2</label>
            <input
              name="m2"
              onChange={handleChange}
              defaultValue={editedProduction.m2}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}></td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Handlowiec</label>
            <input
              name="csa"
              onChange={handleChange}
              defaultValue={editedProduction.csa}
            />
          </td>
        </tr>
        <tr className="confirm-button noprint">
          <td className="form-btn">
            <span>Zatwierdź</span>
            <ConfirmButton type="submit" />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
);

export default OrderlistEditProduction;
