import React from 'react';
import { MdLocalShipping } from 'react-icons/md';

const TransportButton = ({ clickHandler }) => (
  <button
    className="btn btn-primary btn-rounded btn-sm ml-1"
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    <MdLocalShipping />
  </button>
);

export default TransportButton;
