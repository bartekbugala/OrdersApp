import React from 'react';
import { MdEdit } from 'react-icons/md';

const EditButton = ({ clickHandler }) => (
  <button
    className="btn btn-info btn-rounded btn-sm"
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    <MdEdit />
  </button>
);

export default EditButton;
