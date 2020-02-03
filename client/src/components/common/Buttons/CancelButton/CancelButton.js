import React from 'react';
import { MdCancel } from 'react-icons/md';

const CancelButton = ({ clickHandler }) => (
  <button
    className="btn btn-warning btn-rounded btn-sm ml-1"
    onClick={
      clickHandler
        ? e => {
            e.preventDefault();
            clickHandler();
          }
        : e => {
            e.returnValue = false;
          }
    }>
    <MdCancel />
  </button>
);

export default CancelButton;
