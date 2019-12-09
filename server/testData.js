const Production = require('./models/productions.model');
const uuid = require('uuid');

const loadTestData = async () => {
  const productions = [
    {
      id: uuid(),
      name: 'Yellow Duck',
      price: 10000,
      img: '/images/classic_yellow_duck.jpg',
      tag: 'Must Have',
      amount: 1,
      description:
        'Classic rubber yellow duck. The so called dummy mentor. It patiently listens to everything you say. It helps you memorising, and supports the learning process. Comes in warm yellow color.'
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      console.log('No products. Loading test data...');
      await Production.create(productions);
      console.log('Products have been successfully loaded');
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};
module.exports = loadTestData;
