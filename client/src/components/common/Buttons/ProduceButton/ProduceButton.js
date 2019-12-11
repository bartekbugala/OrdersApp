import React from 'react';
import { GiFactory } from 'react-icons/gi';

const ProduceButton = ({ clickHandler }) => (
  <button
    type="button"
    onClick={clickHandler}
    className="btn btn-success btn-rounded btn-sm ml-1">
    <GiFactory />
  </button>
);

export default ProduceButton;
