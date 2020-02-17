// REACT MUST BE IN SCOPE (JSX util)
import React from 'react';

let arr1 = [
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
];
let arr2 = [
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
    value: newProduction.orderNumber || ''
  },
  {
    name: 'orderNumber',
    handler: handleChange,
    value: newProduction.orderNumber || ''
  }
];

export function createTableRowCells(dataForInputsArray, tdClass) {
  dataForInputsArray.map((el, ind) =>
    tableFormField(ind, tdClass, el.name, el.value, el.handler, el.datalistArr)
  );
}

export function tableFormField(
  key,
  tdClass,
  name,
  value,
  handler,
  datalistArr = null
) {
  return (
    <td key={`${key}`} className={`${tdClass}`}>
      <input
        id={`${name}`}
        name={`${name}`}
        className={`form-control`}
        onChange={handler}
        onDoubleClick={e => {
          if (e.target.value !== null) {
            e.target.value = null;
          }
        }}
        value={value}
        list={`${datalistArr !== null ? datalistArr : ''}`}
      />
      {datalistArr !== null
        ? dataList(`${datalistArr}`, name, handler, value, datalistArr)
        : ''}
    </td>
  );
}

export function dataList(id, name, handler, value, optArray = []) {
  return (
    <datalist id={`${id}`} name={`${id}`}>
      {optArray.map((option, ind) => (
        <option key={ind}>{option}</option>
      ))}
    </datalist>
  );
}
