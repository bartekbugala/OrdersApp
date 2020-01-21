import React from 'react';
import { MdEdit } from 'react-icons/md';

const EditButton = ({ clickHandler }) => (
  <button
    className="btn btn-info btn-rounded btn-sm"
    onKeyDown={e => e.preventDefault()}
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    <MdEdit />
  </button>
);

export default EditButton;
