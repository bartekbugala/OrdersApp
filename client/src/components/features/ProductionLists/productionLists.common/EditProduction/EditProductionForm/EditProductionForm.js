import React from 'react';
import ConfirmButton from '../../../../../common/Buttons/ConfirmButton/ConfirmButton';
import DatePicker from 'react-datepicker';
import {
  outsideColors,
  insideColors,
  cSAgents,
  panelTypes,
  panelCores,
  panelThicknesses
} from '../../../../../../redux/initValues';
import 'react-datepicker/dist/react-datepicker.css';
import './EditProductionForm.scss';

const EditProductionForm = ({
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
    <div className="form-group">
      <div className="form-inline">
        <label for="orderNumberField">Nr. zamówienia</label>
        <input
          className="form-control"
          id="orderNumberField"
          name="orderNumber"
          onChange={handleChange}
          value={editedProduction.orderNumber}
        />
      </div>
      <div className="form-inline">
        <label>Nazwa klienta</label>
        <input
          className="form-control"
          name="clientName"
          onChange={handleChange}
          value={editedProduction.clientName}
        />
      </div>
      <div className="form-inline">
        <label>Data wpłaty zaliczki</label>
        <DatePicker
          className="form-control"
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
      </div>
      <div className="form-inline">
        <label>Termin produkcji</label>
        <input
          className="form-control"
          name="productionTerm"
          step="1"
          onChange={handleChangeInt}
          value={editedProduction.productionTerm}
        />
      </div>
      <div className="form-inline">
        <label>Data produkcji</label>
        <DatePicker
          className="form-control"
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
      </div>
      <div className="form-inline">
        <div className="form-check">
          <input
            className="form-check-input"
            name="finalPayment"
            type="checkbox"
            value={editedProduction.finalPayment}
            checked={editedProduction.finalPayment}
            onChange={handleCheckBoxChange}
          />
          <label className="form-check-label">Wpłata końcowa</label>
        </div>
      </div>
      <div className="form-inline">
        <label>Typ płyty</label>
        <input
          className="form-control"
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
          {panelTypes.map(type => (
            <option>{type}</option>
          ))}
        </datalist>
      </div>
      <div className="form-inline">
        <label>Kolor zewnętrzny</label>
        <input
          className="form-control"
          list="outsideColors"
          name="colorOutside"
          onChange={handleChange}
          value={editedProduction.colorOutside}
        />
        <datalist
          id="outsideColors"
          onChange={handleChange}
          value={editedProduction.colorOutside}>
          {outsideColors.map(color => (
            <option>{color}</option>
          ))}
        </datalist>
      </div>
      <div className="form-inline">
        <label>Kolor wewnętrzny</label>
        <input
          className="form-control"
          list="insideColors"
          name="colorInside"
          onChange={handleChange}
          value={editedProduction.colorInside}
        />
        <datalist
          id="insideColors"
          onChange={handleChange}
          value={editedProduction.colorInside}>
          {insideColors.map(color => (
            <option>{color}</option>
          ))}
        </datalist>
      </div>
      <div className="form-inline">
        <label>Rdzeń</label>
        <input
          className="form-control"
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
          {panelCores.map(core => (
            <option>{core}</option>
          ))}
        </datalist>
      </div>
      <div className="form-inline">
        <label>Grubość rdzenia</label>
        <input
          className="form-control"
          list="thicknessList"
          name="thickness"
          onChange={handleChangeFloat}
          value={editedProduction.thickness}
        />
        <datalist
          id="thicknessList"
          onChange={handleChange}
          value={editedProduction.thickness}>
          {panelThicknesses.map(thickness => (
            <option>{thickness}</option>
          ))}
        </datalist>
      </div>
      <div className="form-inline">
        <label>
          m<sup>2</sup>
        </label>
        <input
          className="form-control"
          name="m2"
          onChange={handleChangeFloat}
          value={editedProduction.m2}
        />
      </div>
      <div className="form-inline">
        <label>Handlowiec</label>
        <input
          className="form-control"
          name="csa"
          list="csaList"
          onChange={handleChange}
          value={editedProduction.csa}
        />
        <datalist
          id="csaList"
          onChange={handleChange}
          value={editedProduction.thickness}>
          {cSAgents.map(csa => (
            <option>{csa}</option>
          ))}
        </datalist>
      </div>
      <div className="form-inline">
        <span>Zatwierdź</span>
        <ConfirmButton type="submit" />
      </div>
    </div>
  </form>
);

export default EditProductionForm;
