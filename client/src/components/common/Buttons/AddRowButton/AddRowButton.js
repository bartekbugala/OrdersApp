import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import './AddRowButton.scss';

const AddRowButton = ({ clickHandler }) => (
  <span>
    <button
      onClick={clickHandler}
      className="btn btn-sm btn-success btn-add-row">
      <IoMdAddCircleOutline className="btn-icon" />
    </button>
  </span>
);

/* const AddRowButton = ({ clickHandler }) => (
  <IoMdAddCircleOutline
    onClick={clickHandler}
    role="button"
    className="btn-add-row text-success"
  />
); */

export default AddRowButton;
