// import model
const Production = require('../models/productions.model');
const uuid = require('uuid');

//add new production
exports.addProduction = async (req, res) => {
  try {
    const {
      orderNumber,
      clientName,
      downpayment,
      productionTerm,
      finalPayment,
      type,
      colorOutside,
      colorInside,
      core,
      thickness,
      m2,
      csa,
      finished,
      productionDate,
      canceled,
      transported
    } = req.body;

    let newProduction = new Production();
    newProduction.id = uuid();
    newProduction.orderNumber = orderNumber;
    newProduction.clientName = clientName;
    newProduction.downpayment = downpayment;
    newProduction.productionTerm = productionTerm;
    newProduction.finalPayment = finalPayment || false;
    newProduction.type = type;
    newProduction.colorOutside = colorOutside;
    newProduction.colorInside = colorInside;
    newProduction.core = core;
    newProduction.thickness = thickness;
    newProduction.m2 = m2;
    newProduction.csa = csa;
    newProduction.finished = finished || false;
    newProduction.productionDate = productionDate || false;
    newProduction.canceled = canceled || false;
    newProduction.transported = transported || false;

    const productionSaved = await newProduction.save();
    res.status(200).json(productionSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};
