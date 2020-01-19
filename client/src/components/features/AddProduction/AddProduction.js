import React from 'react';
import OrderlistTrAdd from '../../common/OrderList/OrderlistTrAdd/OrderlistTrAdd';

class AddProduction extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    const { newProduction, updateNew } = this.props;
    updateNew({ ...newProduction, [e.target.name]: e.target.value });
  };

  handleDateSelect = date => {
    const { newProduction, updateNew } = this.props;
    updateNew({ ...newProduction, downpayment: date });
  };

  handleDateChange = date => {
    const { newProduction, updateNew } = this.props;
    updateNew({ ...newProduction, downpayment: date });
  };

  handleCheckBoxChange = e => {
    const { newProduction, updateNew } = this.props;
    const target = e.target;
    updateNew({
      ...newProduction,
      finalPayment: target.checked === true ? true : false
    });
  };

  render() {
    const {
      handleChange,
      handleDateSelect,
      handleDateChange,
      handleCheckBoxChange
    } = this;
    const { newProduction, startDate } = this.props;
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
  }
}
export default AddProduction;
