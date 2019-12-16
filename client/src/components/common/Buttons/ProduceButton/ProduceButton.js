import React from 'react';
import { GiFactory } from 'react-icons/gi';

const ProduceButton = ({ clickHandler }) => (
  <button
    className="btn btn-success btn-rounded btn-sm ml-1"
    onClick={e => {
      e.preventDefault();
      clickHandler();
    }}>
    <GiFactory />
  </button>
);

export default ProduceButton;
