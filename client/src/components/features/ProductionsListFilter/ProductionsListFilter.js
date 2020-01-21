import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ProductionsListFilter extends React.Component {
  handleStartDateSelect = date => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    setDateFilterParams({ ...dateFilterParams, startDateFilter: date });
  };
  handleEndDateSelect = date => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    setDateFilterParams({ ...dateFilterParams, endDateFilter: date });
  };

  handleFormFilter = e => {
    e.preventDefault();
    const { setDateFilterParams } = this.props;
    setDateFilterParams();
  };

  render() {
    const { handleStartDateSelect, handleEndDateSelect } = this;
    const { startDate, dateFilterParams } = this.props;
    return (
      <form>
        <DatePicker
          allowSameDay="true"
          name="from"
          selected={dateFilterParams.startDateFilter}
          onSelect={handleStartDateSelect}
          defaultValue={!isNaN(startDate) ? startDate : startDate}
          dateFormat="dd.MM.yyyy"
        />
        <DatePicker
          allowSameDay="true"
          name="to"
          selected={dateFilterParams.endDateFilter}
          onSelect={handleEndDateSelect}
          defaultValue={!isNaN(startDate) ? startDate : startDate}
          dateFormat="dd.MM.yyyy"
        />
      </form>
    );
  }
}
export default ProductionsListFilter;
