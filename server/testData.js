const Production = require('./models/productions.model');
const uuid = require('uuid');

const loadTestData = async () => {
  const productions = [
    {
      id: uuid(),
      orderNumber: '100',
      clientName: 'Bud-Rem-Mar',
      downpayment: '2019-12-01',
      productionTerm: 21,
      finalpayment: '',
      finished: false,
      csa: 'BB',
      type: 'D',
      core: 'St',
      thickness: 100,
      color: 9006,
      m2: 5248.212
    },
    {
      id: uuid(),
      orderNumber: '101',
      clientName: 'A-Bud-Rem-Mar',
      downpayment: '2019-12-10',
      productionTerm: 1,
      finalpayment: '',
      finished: false,
      csa: 'BB',
      type: 'D',
      core: 'St',
      thickness: 100,
      color: 9006,
      m2: 248.212
    },
    {
      id: uuid(),
      orderNumber: '101',
      clientName: 'X-Bud-Rem-Mar',
      downpayment: '2019-12-01',
      productionTerm: 0,
      finalpayment: '',
      finished: false,
      csa: 'BB',
      type: 'D',
      core: 'St',
      thickness: 100,
      color: 9006,
      m2: 5248.212
    }
  ];

  try {
    let counter = await Production.countDocuments();
    if (counter === 0) {
      console.log('No products. Loading test data...');
      await Production.create(productions);
      console.log('Test Productions have been successfully loaded');
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};
module.exports = loadTestData;
