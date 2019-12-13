import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteButton = ({ clickHandler }) => (
  <button type="button" className="btn btn-danger btn-rounded btn-sm ml-1">
    <MdDelete onClick={clickHandler} />
  </button>
);

export default DeleteButton;
