const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Production = new Schema({
  id: { type: 'String', required: true },
  orderNumber: { type: 'String', required: false },
  clientName: { type: 'String', required: false },
  downpayment: { type: 'Date', required: false },
  productionTerm: { type: 'Number', required: false },
  finalPayment: { type: 'Boolean', required: false },
  finished: { type: 'Boolean', required: false },
  canceled: { type: 'Boolean', required: false },
  csa: { type: 'String', required: false },
  type: { type: 'String', required: false },
  core: { type: 'String', required: false },
  thickness: { type: 'Number', required: false },
  colorOutside: { type: 'String', required: false },
  colorInside: { type: 'String', required: false },
  m2: { type: 'Number', required: false }
});

module.exports = mongoose.model('Production', Production);
