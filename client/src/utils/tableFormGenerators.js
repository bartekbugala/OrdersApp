// REACT MUST BE IN SCOPE (JSX util)
import React from 'react';

export function createTableRowCells(dataForInputsArray, tdClass) {
  return dataForInputsArray.map((el, index) => {
    if (el.disabled === true) {
      return (
        <td className={tdClass}>
          <input disabled />
        </td>
      );
    }
    return tableFormField(
      tdClass,
      el.name,
      el.handler,
      el.value,
      index,
      el.type,
      el.list
    );
  });
}

export function tableFormField(
  tdClass,
  name,
  handler,
  value,
  key,
  type = '',
  datalistArr = null
) {
  return (
    <td key={`${key}`} className={`${tdClass}`}>
      <input
        className={`form-control`}
        id={`${name}`}
        name={`${name}`}
        type={`${type}`}
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
