import {
  LOAD_ALL,
  LOAD_CURRENT,
  LOAD_CANCELED,
  LOAD_FINISHED,
  LOAD_TRANSPORTED,
  LOAD_EDITED,
  LOAD_NEW
} from '../actions/productionsActions';

const initialState = {
  allProductions: [],
  currentProductions: [],
  finishedProductions: [],
  transportedProductions: [],
  canceledProductions: [],
  editedProduction: {},
  newProduction: {
    orderNumber: '',
    clientName: '',
    downpayment: '',
    productionTerm: '',
    finalPayment: false,
    type: '',
    colorOutside: '',
    colorInside: '',
    core: '',
    thickness: '',
    finished: false,
    canceled: false,
    transported: false,
    m2: '',
    csa: ''
  }
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
    default:
      return statePart;
  }
}
