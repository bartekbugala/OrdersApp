import React from 'react';
import { MdDelete } from 'react-icons/md';

const DeleteButton = () => (
  <button type="button" className="btn btn-danger btn-rounded btn-sm ml-1">
    <MdDelete />
  </button>
);

export default DeleteButton;
