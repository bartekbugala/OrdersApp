// import model
const Production = require('../models/productions.model');

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
      { canceled: currentProduction.canceled === false ? true : false }
    );
    res.status(200).json(productionCanceled);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.toggleFinishProduction = async (req, res) => {
  try {
    let currentProduction = await Production.findOne({ id: req.params.id });
    const productionFinished = await Production.findOneAndUpdate(
      { id: req.params.id },
      { finished: currentProduction.finished === false ? true : false }
    );
    res.status(200).json(productionFinished);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.toggleTransportProduction = async (req, res) => {
  try {
    let currentProduction = await Production.findOne({ id: req.params.id });
    const productionTransported = await Production.findOneAndUpdate(
      { id: req.params.id },
      { transported: currentProduction.transported === false ? true : false }
    );
    res.status(200).json(productionTransported);
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
