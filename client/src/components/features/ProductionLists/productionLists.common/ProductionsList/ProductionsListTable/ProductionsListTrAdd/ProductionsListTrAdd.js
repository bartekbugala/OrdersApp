import React from 'react';
import AddRowButton from '../../../../../../common/Buttons/AddRowButton/AddRowButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ProductionsListTrAdd.scss';

const tdClass = 'td-class form-td';

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
    <td className={`${tdClass}`}>
      <input
        name="orderNumber"
        onChange={handleChange}
        value={newProduction.orderNumber || ''}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="clientName"
        onChange={handleChange}
        value={newProduction.clientName || ''}
      />
    </td>
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
    <td className={`${tdClass} rm-arrows`}>
      <input
        name="productionTerm"
        onChange={handleChangeInt}
        value={newProduction.productionTerm || ''}
      />
    </td>
    <td className={`${tdClass}`}>
      <input
        name="finalPayment"
        type="checkbox"
        checked={newProduction.finalPayment || false}
        onChange={handleCheckBoxChange}
      />
    </td>
    <td className={`${tdClass} rm-arrows`}>
      <input
        list="types"
        name="type"
        onChange={handleChange}
        value={newProduction.type || ''}
      />
      <datalist
        id="types"
        name="type"
        onChange={handleChange}
        value={newProduction.type}>
        <option value="D">D</option>
        <option value="S">S</option>
        <option value="SP-L">SP-L</option>
        <option value="SP">SP</option>
      </datalist>
    </td>
    <td className={`${tdClass} rm-arrows`}>
      <input
        list="outsideColors"
        name="colorOutside"
        onChange={handleChange}
        value={newProduction.colorOutside || ''}
      />
      <datalist
        id="outsideColors"
        onChange={handleChange}
        value={newProduction.colorOutside}>
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
    <td className={`${tdClass} rm-arrows`}>
      <input
        list="insideColors"
        name="colorInside"
        onChange={handleChange}
        value={newProduction.colorInside || ''}
      />
      <datalist
        id="insideColors"
        onChange={handleChange}
        value={newProduction.colorInside}>
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
    <td className={`${tdClass} rm-arrows`}>
      <input
        list="cores"
        name="core"
        onChange={handleChange}
        value={newProduction.core || ''}
      />
      <datalist
        id="cores"
        name="core"
        onChange={handleChange}
        value={newProduction.core}>
        <option>Wm</option>
        <option>St</option>
        <option>XPS</option>
        <option>PUR</option>
      </datalist>
    </td>
    <td className={`${tdClass} rm-arrows`}>
      <input
        list="thicknessList"
        name="thickness"
        onChange={handleChangeFloat}
        value={newProduction.thickness || ''}
      />
      <datalist
        id="thicknessList"
        onChange={handleChange}
        value={newProduction.thickness}>
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
    <td className={`${tdClass} rm-arrows`}>
      <input
        name="m2"
        onChange={handleChangeFloat}
        value={newProduction.m2 || ''}
      />
    </td>
    <td className={`${tdClass}`}></td>
    <td className={`${tdClass}`}>
      <input
        name="csa"
        onChange={handleChange}
        value={newProduction.csa || ''}
      />
    </td>
    <td className="form-btn">
      <AddRowButton type="submit" />
    </td>
  </tr>
);

export default ProductionsListTrAdd;
