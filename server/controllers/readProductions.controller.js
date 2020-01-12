// import model
const Production = require('../models/productions.model');

// get all productions
exports.getProductions = async (req, res) => {
  try {
    res.status(200).json(await Production.find({}));
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCurrent = async (req, res) => {
  try {
    res
      .status(200)
      .json(await Production.find({ canceled: false, finished: false }));
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

exports.getFinished = async (req, res) => {
  try {
    res.status(200).json(
      await Production.find({
        canceled: false,
        finished: true,
        transported: false
      })
    );
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTransported = async (req, res) => {
  try {
    res.status(200).json(await Production.find({ transported: true }));
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
exports.getProductionsByRange = async function(req, res) {
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
