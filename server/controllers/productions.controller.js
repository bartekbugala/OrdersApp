// import model
const Production = require('../models/productions.model');
const uuid = require('uuid');

// get all productions
exports.getProductions = async (req, res) => {
  try {
    res.status(200).json(await Production.find({ canceled: false }));
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getCanceled = async (req, res) => {
  try {
    res.status(200).json(await Production.find({ canceled: true }));
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single production
exports.getSingleProduction = async (req, res) => {
  try {
    res.status(200).json(await Production.findOne({ id: req.params.id }));
  } catch (err) {
    res.status(500).res.json(err);
  }
};

// get productions by range
exports.getProductionsByRange = async function (req, res) {
  try {
    let { startAt, limit, sortParam } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);
    const productions = await Production.find()
      .sort(sortParam)
      .collation({ locale: 'pl', strength: 1 })
      .skip(startAt)
      .limit(limit);
    // return total amount of documents in collection
    const amount = await Production.countDocuments();

    // response: productions within range and total amount of productions
    res.status(200).json({ productions, amount });
  } catch (err) {
    res.status(500).json(err);
  }
};

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
      canceled
    } = req.body;

    let newProduction = new Production();
    newProduction.id = uuid();
    newProduction.orderNumber = orderNumber;
    newProduction.clientName = clientName;
    newProduction.downpayment = downpayment;
    newProduction.productionTerm = productionTerm;
    newProduction.finalpayment = finalPayment || false;
    newProduction.type = type;
    newProduction.colorOutside = colorOutside;
    newProduction.colorInside = colorInside;
    newProduction.core = core;
    newProduction.thickness = thickness;
    newProduction.m2 = m2;
    newProduction.csa = csa;
    newProduction.finished = finished || false;
    newProduction.canceled = canceled || false;

    const productionSaved = await newProduction.save();
    res.status(200).json(productionSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.editProduction = async (req, res) => {
  try {
    const { name, price, img, amount, description, tag } = req.body;
    const productionUpdated = await Production.findOneAndUpdate(
      { id: req.params.id },
      {
        name: name,
        price: price,
        img: img,
        amount: amount,
        description: description,
        tag: tag
      }
    );
    res.status(200).json(productionUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.toggleCancelProduction = async (req, res) => {
  try {
    let currentProduction = await Production.findOne({ id: req.params.id });
    const productionCanceled = await Production.findOneAndUpdate(
      { id: req.params.id },
      { canceled: (currentProduction.canceled === false) ? true : false }
    );
    res.status(200).json(productionCanceled);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.removeOneAmount = async (req, res) => {
  try {
    const productionUpdated = await Production.findOneAndUpdate(
      { id: req.params.id },
      { $inc: { amount: -1 } }
    );
    res.status(200).json(productionUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteProduction = async (req, res) => {
  try {
    const productionDeleted = await Production.findOneAndDelete({
      id: req.params.id
    });
    if (productionDeleted === null) {
      let noProduction = { error: 'already removed or not in database' };
      res.status(404).json(noProduction);
    } else res.status(200).json(productionDeleted);
  } catch (err) {
    res.status(500).json(err);
  }
};
