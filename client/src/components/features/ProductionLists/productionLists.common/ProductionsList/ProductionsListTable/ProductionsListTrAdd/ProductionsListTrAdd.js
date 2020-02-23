import React from 'react';
import AddRowButton from '../../../../../../common/Buttons/AddRowButton/AddRowButton';
import DatePicker from 'react-datepicker';
import {
  outsideColors,
  insideColors,
  cSAgents,
  panelTypes,
  panelCores,
  panelThicknesses
} from '../../../../../../../redux/initValues';
import { createTableRowCells } from '../../../../../../../utils/tableFormGenerators';
import 'react-datepicker/dist/react-datepicker.css';
import './ProductionsListTrAdd.scss';

const tdClass = 'td-class form-td rm-arrows';

const ProductionsListTrAdd = ({
  startDate,
  newProduction,
  handleChange,
  handleChangeFloat,
  handleChangeInt,
  handleCheckBoxChange,
  handleDateSelect
}) => (
  <tr className="new-production noprint">
    {createTableRowCells(
      [
        {
          name: 'orderNumber',
          handler: handleChange,
          value: newProduction.orderNumber || ''
        },
        {
          name: 'clientName',
          handler: handleChange,
          value: newProduction.clientName || ''
        }
      ],
      tdClass
    )}

    <td className={`${tdClass}`}>
      <DatePicker
        allowSameDay="true"
        name="downpayment"
        selected={newProduction.downpayment || ''}
        onSelect={handleDateSelect}
        value={
          !isNaN(newProduction.downpayment)
            ? newProduction.downpayment
            : startDate
        }
        dateFormat="dd.MM.yy"
      />
    </td>
    {createTableRowCells(
      [
        {
          name: 'productionTerm',
          handler: handleChangeInt,
          value: newProduction.productionTerm || ''
        },
        {
          name: 'finalPayment',
          type: 'checkbox',
          handler: handleCheckBoxChange,
          value: newProduction.finalPayment || false
        },
        {
          name: 'type',
          handler: handleChange,
          value: newProduction.type || '',
          list: panelTypes
        },
        {
          name: 'core',
          handler: handleChange,
          value: newProduction.core || '',
          list: panelCores
        },
        {
          name: 'thickness',
          handler: handleChangeFloat,
          value: newProduction.thickness || '',
          list: panelThicknesses
        },
        {
          name: 'colorOutside',
          handler: handleChange,
          value: newProduction.colorOutside || '',
          list: outsideColors
        },
        {
          name: 'colorInside',
          handler: handleChange,
          value: newProduction.colorInside || '',
          list: insideColors
        },
        {
          name: 'm2',
          handler: handleChangeFloat,
          value: newProduction.m2 || ''
        },
        { disabled: true },
        {
          name: 'csa',
          handler: handleChange,
          value: newProduction.csa || '',
          list: cSAgents
        }
      ],
      tdClass
    )}
    <td className="form-btn">
      <AddRowButton type="submit" />
    </td>
  </tr>
);

export default ProductionsListTrAdd;
