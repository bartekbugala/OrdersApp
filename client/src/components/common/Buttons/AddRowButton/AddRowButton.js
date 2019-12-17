import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import './AddRowButton.scss';

const AddRowButton = ({ clickHandler }) => (
  <span>
    <button
      className="btn btn-sm btn-success btn-add-row"
      onClick={e => {
        e.preventDefault();
        clickHandler();
      }}>
      <IoMdAddCircleOutline className="btn-icon" />
    </button>
  </span>
);

export default AddRowButton;
