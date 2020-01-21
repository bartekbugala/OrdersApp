import React from 'react';
import OrderlistTrAdd from '../../common/OrderList/OrderlistTrAdd/OrderlistTrAdd';

const AddProduction = ({ newProduction, startDate, updateNew }) => {
  const handleChange = e => {
    updateNew({ ...newProduction, [e.target.name]: e.target.value });
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
    <OrderlistTrAdd
      handleChange={handleChange}
      newProduction={newProduction}
      handleDateChange={handleDateChange}
      handleCheckBoxChange={handleCheckBoxChange}
      handleDateSelect={handleDateSelect}
      startDate={startDate}
    />
  );
};

export default AddProduction;
