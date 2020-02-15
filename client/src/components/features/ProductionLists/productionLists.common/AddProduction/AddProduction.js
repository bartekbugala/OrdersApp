import React from 'react';
import ProductionsListTrAdd from '../ProductionsList/ProductionsListTable/ProductionsListTrAdd/ProductionsListTrAdd';
import {
  returnFloatChar,
  returnIntChar
} from '../../../../../utils/inputValidation';

const AddProduction = ({ newProduction, startDate, updateNew }) => {
  const handleChange = e => {
    updateNew({
      ...newProduction,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeFloat = e => {
    updateNew({
      ...newProduction,
      [e.target.name]: returnFloatChar(e.target.value)
    });
  };

  const handleChangeInt = e => {
    updateNew({
      ...newProduction,
      [e.target.name]: returnIntChar(e.target.value)
    });
  };

  const handleDateSelect = date => {
    updateNew({ ...newProduction, downpayment: date });
  };

  const handleDateChange = date => {
    updateNew({ ...newProduction, downpayment: date });
  };

  const handleCheckBoxChange = e => {
    const target = e.target;
    updateNew({
      ...newProduction,
      finalPayment: target.checked === true ? true : false
    });
  };

  return (
    <ProductionsListTrAdd
      handleChange={handleChange}
      handleChangeFloat={handleChangeFloat}
      handleChangeInt={handleChangeInt}
      newProduction={newProduction}
      handleDateChange={handleDateChange}
      handleCheckBoxChange={handleCheckBoxChange}
      handleDateSelect={handleDateSelect}
      startDate={startDate}
    />
  );
};

export default AddProduction;
