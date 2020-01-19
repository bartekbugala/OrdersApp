import React from 'react';
import OrderlistTrAdd from '../../common/OrderList/OrderlistTrAdd/OrderlistTrAdd';

const AddProduction = ({ newProduction, startDate }) => {
  const handleChange = e => {
    const { newProduction, updateNew } = this.props;
    updateNew({ ...newProduction, [e.target.name]: e.target.value });
  };

  const handleDateSelect = date => {
    const { newProduction, updateNew } = this.props;
    updateNew({ ...newProduction, downpayment: date });
  };

  const handleDateChange = date => {
    const { newProduction, updateNew } = this.props;
    updateNew({ ...newProduction, downpayment: date });
  };

  const handleCheckBoxChange = e => {
    const { newProduction, updateNew } = this.props;
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
