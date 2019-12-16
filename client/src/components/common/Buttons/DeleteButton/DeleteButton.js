import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteButton = ({ clickHandler }) => (
  <button
    className="btn btn-danger btn-rounded btn-sm ml-1"
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    >
    <MdDelete />
  </button>
);

export default DeleteButton;
