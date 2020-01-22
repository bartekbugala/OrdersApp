import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ConfirmButton from '../../common/Buttons/ConfirmButton/ConfirmButton';

class ProductionsListFilter extends React.Component {
  handleStartDateSelect = date => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    const dateUtc = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setDateFilterParams({ ...dateFilterParams, startDateFilter: dateUtc });
  };
  handleEndDateSelect = date => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    const dateUtc = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setDateFilterParams({ ...dateFilterParams, endDateFilter: dateUtc });
  };

  handleFormFilter = e => {
    e.preventDefault();
    const { sortParams, dateFilterParams, loadProductions } = this.props;
    loadProductions(
      sortParams.key,
      sortParams.valueType,
      sortParams.direction,
      dateFilterParams
    );
  };

  render() {
    const {
      handleStartDateSelect,
      handleEndDateSelect,
      handleFormFilter
    } = this;
    const { startDate, dateFilterParams } = this.props;
    return (
      <form onSubmit={handleFormFilter} autoComplete="off">
        <DatePicker
          allowSameDay="true"
          startDate={startDate}
          name="from"
          selected={dateFilterParams.startDateFilter}
          onSelect={handleStartDateSelect}
          value={
            !isNaN(dateFilterParams.startDateFilter)
              ? dateFilterParams.startDateFilter
              : startDate
          }
          dateFormat="dd.MM.yy"
        />
        <DatePicker
          startDate={startDate}
          allowSameDay="true"
          name="to"
          selected={dateFilterParams.endDateFilter}
          onSelect={handleEndDateSelect}
          defaultValue={!isNaN(startDate) ? startDate : startDate}
          dateFormat="dd.MM.yy"
        />
        <ConfirmButton />
      </form>
    );
  }
}
export default ProductionsListFilter;
