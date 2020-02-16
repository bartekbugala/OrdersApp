import React from 'react';
import DatePicker from 'react-datepicker';
import {
  outsideColors,
  insideColors,
  cSAgents,
  panelTypes,
  panelCores,
  panelThicknesses
} from '../../../../../../redux/initValues';
import {
  formField,
  twoFieldsInRow
} from '../../../../../../utils/formGenerators';
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
    {twoFieldsInRow(
      {
        label: 'Nr. zamówienia',
        name: 'orderNumber',
        value: editedProduction.orderNumber,
        handler: handleChange
      },
      {
        label: 'Handlowiec',
        name: 'csa',
        value: editedProduction.csa,
        handler: handleChange,
        datalistArr: cSAgents
      }
    )}
    {formField(
      'Nazwa klienta',
      'clientName',
      editedProduction.clientName,
      handleChange
    )}
    <div className="form-group row">
      <label className="col-4 col-form-label">Data wpłaty zaliczki </label>
      <div className="col-6">
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
    </div>
    {formField(
      'Termin produkcji',
      'productionTerm',
      editedProduction.productionTerm,
      handleChangeInt
    )}
    <div className="form-group row">
      <label htmlFor="productionDate" className="col-4 col-form-label">
        Data produkcji
      </label>
      <div className="col-6">
        <DatePicker
          id="productionDate"
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
    </div>
    <div className="form-group row">
      <label className="col-4">Wpłata końcowa</label>
      <div className="col-6">
        <div className="custom-control custom-checkbox custom-control-inline">
          <input
            className="custom-control-input"
            name="finalPayment"
            id="finalPayment"
            type="checkbox"
            checked={editedProduction.finalPayment}
            value={editedProduction.finalPayment}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor="finalPayment" className="custom-control-label">
            Zapłacono
          </label>
        </div>
      </div>
    </div>
    {twoFieldsInRow(
      {
        label: 'Typ płyty',
        name: 'type',
        value: editedProduction.type,
        handler: handleChange,
        datalistArr: panelTypes
      },
      {
        label: 'Rdzeń',
        name: 'core',
        value: editedProduction.core,
        handler: handleChange,
        datalistArr: panelCores
      }
    )}
    {twoFieldsInRow(
      {
        label: 'Kolor zewnętrzny',
        name: 'colorOutside',
        value: editedProduction.colorOutside,
        handler: handleChange,
        datalistArr: outsideColors
      },
      {
        label: 'Kolor wewnętrzny',
        name: 'colorInside',
        value: editedProduction.colorInside,
        handler: handleChange,
        datalistArr: insideColors
      }
    )}
    {twoFieldsInRow(
      {
        label: 'Grubość',
        name: 'thickness',
        value: editedProduction.thickness,
        handler: handleChangeFloat,
        datalistArr: panelThicknesses
      },
      {
        label: 'm2',
        name: 'm2',
        value: editedProduction.m2,
        handler: handleChangeFloat
      }
    )}
    <div className="form-group row">
      <div className="offset-4 col-8">
        <button name="submit" type="submit" className="btn btn-success">
          Zatwierdź zmiany
        </button>
      </div>
    </div>
  </form>
);

export default EditProductionForm;
