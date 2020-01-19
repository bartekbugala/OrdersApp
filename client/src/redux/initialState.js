const initialState = {
  menuLinks: [
    { path: '/current', title: 'Bieżące' },
    { path: '/finished', title: 'Wyprodukowane' },
    { path: '/transported', title: 'Wywiezione' },
    { path: '/canceled', title: 'Anulowane' },
    { path: '/all', title: 'Wszystkie' },
    { path: '/stats', title: 'Statystyki' }
  ],
  sortParams: { key: 'orderNumber', valueType: 'number', direction: 'asc' },
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
  },
  updateRequest: {
    pending: false,
    error: null,
    success: null
  },
  request: {
    pending: false,
    error: null,
    success: null
  }
};

export default initialState;
