const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Production = new Schema({
  id: { type: 'String', required: true },
  name: { type: 'String', required: true },
  price: { type: 'Number', required: true },
  img: { type: 'String', required: true },
  amount: { type: 'Number', required: true },
  description: { type: 'String', required: false },
  tag: { type: 'String', required: false }
});

module.exports = mongoose.model('Production', Production);
