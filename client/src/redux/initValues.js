export const emptyProduction = {
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
  productionDate: '',
  canceled: false,
  transported: false,
  m2: 20,
  csa: ''
};

export const panelThicknesses = [
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  80,
  100,
  120,
  150,
  200,
  250
];

export const panelTypes = ['D', 'S', 'SP-L', 'SP', 'T35'];
export const panelCores = ['St', 'Wm', 'XPS', 'PUR'];
export const cSAgents = ['BB', 'B', 'S'];
const otherCovers = ['PERF', 'NR', 'STAND'];
export const insideColors = [
  'BIAŁY',
  '9002',
  '9010',
  '9016',
  '9006',
  ...otherCovers
];
export const outsideColors = [
  'BIAŁY',
  '9002',
  '9010',
  '9016',
  '9006',
  '7035',
  '7024',
  '1015',
  '8017',
  '3011',
  ...otherCovers
];
