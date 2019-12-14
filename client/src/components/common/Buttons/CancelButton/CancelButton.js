import React from 'react';
import { MdCancel } from 'react-icons/md';

const CancelButton = ({ clickHandler }) => (
  <button type="button" className="btn btn-warning btn-rounded btn-sm ml-1">
    <MdCancel
      onClick={e => {
        e.preventDefault();
        clickHandler();
      }}
    />
  </button>
);

export default CancelButton;
