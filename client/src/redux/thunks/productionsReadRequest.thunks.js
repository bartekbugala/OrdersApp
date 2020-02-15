import { API_URL } from '../../config';
import axios from 'axios';
import sortByColumn from '../../utils/sortByColumn';
import {
  startRequest,
  endRequest,
  errorRequest
} from '../actions/requestsActions';
import {
  loadAllProductions,
  loadCurrentProductions,
  loadFinishedProductions,
  loadTransportedProductions,
  loadCanceledProductions,
  loadEditedProduction
} from '../actions/productionsActions';

export const loadAllProductionsRequest = (
  key,
  valueType,
  direction,
  dateFilterParams
) => {
  let startDate = '0';
  let endDate = '0';
  if (dateFilterParams.startDateFilter !== '') {
    startDate = dateFilterParams.startDateFilter.toISOString(
      dateFilterParams.startDateFilter
    );
  }
  if (dateFilterParams.endDateFilter !== '') {
    endDate = dateFilterParams.endDateFilter.toISOString(
      dateFilterParams.endDateFilter
    );
  }
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(
        `${API_URL}/productions/${startDate}/${endDate}`
      );
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadAllProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadCurrentProductionsRequest = (
  key,
  valueType,
  direction,
  dateFilterParams
) => {
  let startDate = '0';
  let endDate = '0';
  if (dateFilterParams.startDateFilter !== '') {
    startDate = dateFilterParams.startDateFilter.toISOString(
      dateFilterParams.startDateFilter
    );
  }
  if (dateFilterParams.endDateFilter !== '') {
    endDate = dateFilterParams.endDateFilter.toISOString(
      dateFilterParams.endDateFilter
    );
  }
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(
        `${API_URL}/productions/current/${startDate}/${endDate}`
      );
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadCurrentProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadFinishedProductionsRequest = (
  key,
  valueType,
  direction,
  dateFilterParams
) => {
  let startDate = '0';
  let endDate = '0';
  if (dateFilterParams.startDateFilter !== '') {
    startDate = dateFilterParams.startDateFilter.toISOString(
      dateFilterParams.startDateFilter
    );
  }
  if (dateFilterParams.endDateFilter !== '') {
    endDate = dateFilterParams.endDateFilter.toISOString(
      dateFilterParams.endDateFilter
    );
  }
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(
        `${API_URL}/productions/finished/${startDate}/${endDate}`
      );
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadFinishedProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadCanceledProductionsRequest = (
  key,
  valueType,
  direction,
  dateFilterParams
) => {
  let startDate = '0';
  let endDate = '0';
  if (dateFilterParams.startDateFilter !== '') {
    startDate = dateFilterParams.startDateFilter.toISOString(
      dateFilterParams.startDateFilter
    );
  }
  if (dateFilterParams.endDateFilter !== '') {
    endDate = dateFilterParams.endDateFilter.toISOString(
      dateFilterParams.endDateFilter
    );
  }
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(
        `${API_URL}/productions/canceled/${startDate}/${endDate}`
      );
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadCanceledProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadTransportedProductionsRequest = (
  key,
  valueType,
  direction,
  dateFilterParams
) => {
  let startDate = '0';
  let endDate = '0';
  if (dateFilterParams.startDateFilter !== '') {
    startDate = dateFilterParams.startDateFilter.toISOString(
      dateFilterParams.startDateFilter
    );
  }
  if (dateFilterParams.endDateFilter !== '') {
    endDate = dateFilterParams.endDateFilter.toISOString(
      dateFilterParams.endDateFilter
    );
  }
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(
        `${API_URL}/productions/transported/${startDate}/${endDate}`
      );
      sortByColumn(res.data, key, valueType, direction);
      dispatch(loadTransportedProductions(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

// load edited productrion
export const loadEditedProductionRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${API_URL}/productions/${id}`);
      const payload = res.data;
      const downpaymentDate = res.data.downpayment;
      const productionDate = res.data.productionDate;
      payload.downpayment = downpaymentDate;
      payload.productionDate = productionDate;
      dispatch(loadEditedProduction(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
