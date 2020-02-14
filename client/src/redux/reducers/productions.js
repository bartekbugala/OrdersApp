import {
  LOAD_ALL,
  LOAD_CURRENT,
  LOAD_CANCELED,
  LOAD_FINISHED,
  LOAD_TRANSPORTED,
  LOAD_EDITED,
  LOAD_NEW,
  SET_DATE_FILTER
} from '../actions/productionsActions';

import {
  emptyProduction,
  insideColors,
  outsideColors,
  panelTypes,
  cSAgents,
  panelCores,
  panelThicknesses
} from './initValues';

const initialState = {
  allProductions: [],
  currentProductions: [],
  finishedProductions: [],
  transportedProductions: [],
  canceledProductions: [],
  editedProduction: emptyProduction,
  newProduction: emptyProduction,
  dateFilterParams: { startDateFilter: '', endDateFilter: '' },
  panelThicknesses: panelThicknesses,
  panelTypes: panelTypes,
  panelCores: panelCores,
  cSAgents: cSAgents,
  insideColors: insideColors,
  outsideColors: outsideColors
};

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ALL:
      return { ...statePart, allProductions: action.payload };
    case LOAD_CURRENT:
      return { ...statePart, currentProductions: action.payload };
    case LOAD_CANCELED:
      return { ...statePart, canceledProductions: action.payload };
    case LOAD_FINISHED:
      return { ...statePart, finishedProductions: action.payload };
    case LOAD_TRANSPORTED:
      return { ...statePart, transportedProductions: action.payload };
    case LOAD_EDITED:
      return { ...statePart, editedProduction: action.payload };
    case LOAD_NEW:
      return { ...statePart, newProduction: action.payload };
    case SET_DATE_FILTER:
      return { ...statePart, dateFilterParams: action.payload };
    default:
      return statePart;
  }
}
