import React from 'react';
import { MdEdit } from 'react-icons/md';

const EditButton = () => (
  <button
    className="btn btn-warning btn-rounded btn-sm"
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    >
    <MdEdit />
  </button>
);

export default EditButton;
