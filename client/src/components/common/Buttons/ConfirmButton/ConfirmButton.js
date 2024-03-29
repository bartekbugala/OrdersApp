import React from 'react';
import { MdCheck } from 'react-icons/md';

const ConfirmButton = ({ clickHandler }) => (
  <button
    className="btn btn-success btn-rounded btn-sm ml-1"
    onClick={
      clickHandler
        ? e => {
          e.preventDefault();
          clickHandler();
        }
        : e => { e.returnValue = false }
    }>
    <MdCheck />
  </button>
);

export default ConfirmButton;
