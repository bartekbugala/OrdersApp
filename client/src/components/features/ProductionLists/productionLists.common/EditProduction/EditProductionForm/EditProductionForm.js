import React from 'react';
import ConfirmButton from '../../../../../common/Buttons/ConfirmButton/ConfirmButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './EditProductionForm.scss';

const tdClass = 'td-class form-td';

const EditProductionForm = ({
  startDate,
  editedProduction,
  handleChange,
  handleChangeFloat,
  handleChangeInt,
  handleCheckBoxChange,
  handleDateSelect,
  handleProductionDateSelect,
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
              value={editedProduction.orderNumber}
            />
          </td>
        </tr>
        <tr className="edit-production noprint">
          <td className={`${tdClass}`}>
            <label>Nazwa klienta</label>
            <input
              name="clientName"
              onChange={handleChange}
              value={editedProduction.clientName}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Data wpłaty zaliczki</label>
            <DatePicker
              allowSameDay="true"
              name="downpayment"
              selected={
                editedProduction.downpayment === null
                  ? ''
                  : new Date(editedProduction.downpayment)
              }
              onSelect={handleDateSelect}
              value={
                editedProduction.downpayment === null
                  ? ''
                  : new Date(editedProduction.downpayment)
              }
              dateFormat="dd.MM.yyyy"
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass} rm-arrows`}>
            <label>Termin produkcji</label>
            <input
              name="productionTerm"
              step="1"
              onChange={handleChangeInt}
              value={editedProduction.productionTerm}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Data produkcji</label>
            <DatePicker
              allowSameDay="true"
              name="productionDate"
              selected={
                editedProduction.productionDate === null
                  ? ''
                  : new Date(editedProduction.productionDate)
              }
              onSelect={handleProductionDateSelect}
              value={
                editedProduction.productionDate === null
                  ? ''
                  : new Date(editedProduction.productionDate)
              }
              dateFormat="dd.MM.yyyy"
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}`}>
            <label>Wpłata końcowa</label>
            <input
              name="finalPayment"
              type="checkbox"
              value={editedProduction.finalPayment}
              checked={editedProduction.finalPayment}
              onChange={handleCheckBoxChange}
            />
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass}  rm-arrows`}>
            <label>Typ płyty</label>
            <input
              list="types"
              name="type"
              onChange={handleChange}
              value={editedProduction.type}
            />
            <datalist
              id="types"
              name="type"
              onChange={handleChange}
              value={editedProduction.type}>
              <option>D</option>
              <option>S</option>
              <option>SP-L</option>
              <option>SP</option>
            </datalist>
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass} rm-arrows`}>
            <label>Kolor zewnętrzny</label>
            <input
              list="outsideColors"
              name="colorOutside"
              onChange={handleChange}
              value={editedProduction.colorOutside}
            />
            <datalist
              id="outsideColors"
              onChange={handleChange}
              value={editedProduction.colorOutside}>
              <option>BIAŁY</option>
              <option>9006</option>
              <option>9002</option>
              <option>9010</option>
              <option>9016</option>
              <option>7035</option>
              <option>1015</option>
              <option>7024</option>
              <option>3011</option>
              <option>8017</option>
              <option>NR</option>
              <option>PERF</option>
              <option>STAND</option>
            </datalist>
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass} rm-arrows`}>
            <label>Kolor wewnętrzny</label>
            <input
              list="insideColors"
              name="colorInside"
              onChange={handleChange}
              value={editedProduction.colorInside}
            />
            <datalist
              id="insideColors"
              onChange={handleChange}
              value={editedProduction.colorInside}>
              <option>BIAŁY</option>
              <option>9002</option>
              <option>9010</option>
              <option>9016</option>
              <option>9006</option>
              <option>7035</option>
              <option>NR</option>
              <option>PERF</option>
              <option>STAND</option>
            </datalist>
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass} rm-arrows`}>
            <label>Rdzeń</label>
            <input
              list="cores"
              name="core"
              onChange={handleChange}
              value={editedProduction.core}
            />
            <datalist
              id="cores"
              name="core"
              onChange={handleChange}
              value={editedProduction.core}>
              <option>Wm</option>
              <option>St</option>
              <option>XPS</option>
              <option>PUR</option>
            </datalist>
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass} rm-arrows`}>
            <label>Grubość rdzenia</label>
            <input
              list="thicknessList"
              name="thickness"
              onChange={handleChangeFloat}
              value={editedProduction.thickness}
            />
            <datalist
              id="thicknessList"
              onChange={handleChange}
              value={editedProduction.thickness}>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
              <option>45</option>
              <option>50</option>
              <option>55</option>
              <option>60</option>
              <option>80</option>
              <option>100</option>
              <option>120</option>
              <option>150</option>
              <option>200</option>
              <option>250</option>
            </datalist>
          </td>
        </tr>
        <tr className="noprint">
          <td className={`${tdClass} rm-arrows`}>
            <label>
              m<sup>2</sup>
            </label>
            <input
              name="m2"
              onChange={handleChangeFloat}
              value={editedProduction.m2}
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
              value={editedProduction.csa}
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

export default EditProductionForm;
