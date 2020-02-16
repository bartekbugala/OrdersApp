import React from 'react';
import DatePicker from 'react-datepicker';
import { isEqual } from 'lodash';
import 'react-datepicker/dist/react-datepicker.css';
import ConfirmButton from '../../../../common/Buttons/ConfirmButton/ConfirmButton';
import CancelButton from '../../../../common/Buttons/CancelButton/CancelButton';

class ProductionsListFilter extends React.Component {
  componentDidUpdate(prevProps) {
    const { loadProductions, sortParams, dateFilterParams } = this.props;
    if (isEqual(dateFilterParams, prevProps.dateFilterParams) === false) {
      loadProductions(
        sortParams.key,
        sortParams.valueType,
        sortParams.direction,
        dateFilterParams
      );
    }
  }

  handleStartDateSelect = (date = '') => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    if ((date !== null) & (date !== undefined)) {
      const dateUtc = new Date(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      );
      setDateFilterParams({ ...dateFilterParams, startDateFilter: dateUtc });
    } else {
      setDateFilterParams({ ...dateFilterParams, startDateFilter: '' });
    }
  };

  handleEndDateSelect = (date = '') => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    if ((date !== null) & (date !== undefined)) {
      const dateUtc = new Date(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      );
      setDateFilterParams({ ...dateFilterParams, endDateFilter: dateUtc });
    } else {
      setDateFilterParams({ ...dateFilterParams, endDateFilter: '' });
    }
  };

  handleClearFilter = () => {
    const { setDateFilterParams, dateFilterParams } = this.props;
    setDateFilterParams({
      ...dateFilterParams,
      startDateFilter: '',
      endDateFilter: ''
    });
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
      handleClearFilter,
      handleFormFilter
    } = this;
    const { startDate, dateFilterParams } = this.props;
    return (
      <form
        onSubmit={handleFormFilter}
        autoComplete="off"
        className="form-group">
        {`Filtr według dat: od `}
        <DatePicker
          allowSameDay="true"
          className="form-control"
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
        {` do `}
        <DatePicker
          startDate={startDate}
          allowSameDay="true"
          className="form-control"
          name="to"
          selected={dateFilterParams.endDateFilter}
          onSelect={handleEndDateSelect}
          defaultValue={!isNaN(startDate) ? startDate : startDate}
          dateFormat="dd.MM.yy"
        />
        <ConfirmButton />
        <CancelButton clickHandler={handleClearFilter} />
      </form>
    );
  }
}
export default ProductionsListFilter;
