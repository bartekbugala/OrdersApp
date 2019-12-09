const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Production = new Schema({
  id: { type: 'String', required: true },
  orderNumber: { type: 'String', required: true },
  clientName: { type: 'String', required: true },
  downpayment: { type: 'Date', required: false },
  productionTerm: { type: 'Number', required: true },
  finalpayment: { type: 'Date', required: false },
  finished: { type: 'Boolean', required: false },
  csa: { type: 'String', required: true },
  type: { type: 'String', required: true },
  core: { type: 'String', required: true },
  thickness: { type: 'Number', required: true },
  color: { type: 'String', required: true },
  m2: { type: 'Number', required: true }
});

module.exports = mongoose.model('Production', Production);
