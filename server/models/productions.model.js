const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Production = new Schema({
  id: { type: 'String', required: true },
  orderNumber: { type: 'String', required: false },
  clientName: { type: 'String', required: false },
  downpayment: { type: 'String', required: false },
  productionTerm: { type: 'String', required: false },
  finalpayment: { type: 'String', required: false },
  finished: { type: 'String', required: false },
  csa: { type: 'String', required: false },
  type: { type: 'String', required: false },
  core: { type: 'String', required: false },
  thickness: { type: 'String', required: false },
  color: { type: 'String', required: false },
  m2: { type: 'String', required: false }
});

module.exports = mongoose.model('Production', Production);
