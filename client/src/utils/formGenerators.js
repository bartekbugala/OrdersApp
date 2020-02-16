// REACT MUST BE IN SCOPE (JSX util)
import React from 'react';

export function formField(label, name, value, handler, datalistArr = null) {
  return (
    <div className="form-group row">
      <label htmlFor={`${name}`} className="col-4 col-form-label">
        {`${label}`}
      </label>
      <div className="col-6">
        <input
          id={`${name}`}
          name={`${name}`}
          className={`form-control`}
          onChange={handler}
          value={value}
          list={`${datalistArr !== null ? datalistArr : ''}`}
        />
        {datalistArr !== null
          ? dataList(`${datalistArr}`, name, handler, value, datalistArr)
          : ''}
      </div>
    </div>
  );
}

export function twoFieldsInRow(fieldObj1, fieldObj2) {
  return (
    <div className="form-group row">
      <div className="col-6 row">
        <label htmlFor={`${fieldObj1.name}`} className="col-6 col-form-label">
          {`${fieldObj1.label}`}
        </label>
        <input
          id={`${fieldObj1.name}`}
          name={`${fieldObj1.name}`}
          className="form-control col-5"
          onChange={fieldObj1.handler}
          value={fieldObj1.value}
          list={`${
            fieldObj1.datalistArr !== null ? fieldObj1.datalistArr : ''
          }`}
        />
        {fieldObj1.datalistArr !== null
          ? dataList(
              `${fieldObj1.datalistArr}`,
              fieldObj1.name,
              fieldObj1.handler,
              fieldObj1.value,
              fieldObj1.datalistArr
            )
          : ''}
      </div>
      <div className="col-6 row">
        <label htmlFor={`${fieldObj2.name}`} className="col-6 col-form-label">
          {`${fieldObj2.label}`}
        </label>

        <input
          id={`${fieldObj2.name}`}
          name={`${fieldObj2.name}`}
          className="form-control col-5"
          onChange={fieldObj2.handler}
          value={fieldObj2.value}
          list={`${
            fieldObj2.datalistArr !== null ? fieldObj2.datalistArr : ''
          }`}
        />
        {fieldObj2.datalistArr !== null
          ? dataList(
              `${fieldObj2.datalistArr}`,
              fieldObj2.name,
              fieldObj2.handler,
              fieldObj2.value,
              fieldObj2.datalistArr
            )
          : ''}
      </div>
    </div>
  );
}

export function dataList(id, name, handler, value, optArray = []) {
  return (
    <datalist
      id={`${id}`}
      name={`${id}`}
      /* value={value} */
      /* onChange={handler} */
    >
      {optArray.map((option, ind) => (
        <option key={ind}>{option}</option>
      ))}
    </datalist>
  );
}
