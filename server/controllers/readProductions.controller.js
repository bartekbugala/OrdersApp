// import model
const Production = require('../models/productions.model');

// get all productions
exports.getProductions = async (req, res) => {
  const { startDate, endDate } = req.params;
  const query =
    startDate !== '0' && endDate !== '0'
      ? {
          downpayment: {
            $gte: `${startDate}`,
            $lte: `${endDate}`
          }
        }
      : {};
  try {
    res.status(200).json(await Production.find(query));
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCurrent = async (req, res) => {
  const { startDate, endDate } = req.params;
  const query =
    startDate !== '0' && endDate !== '0'
      ? {
          canceled: false,
          finished: false,
          downpayment: {
            $gte: `${startDate}`,
            $lte: `${endDate}`
          }
        }
      : { canceled: false, finished: false };
  try {
    res.status(200).json(await Production.find(query));
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCanceled = async (req, res) => {
  const { startDate, endDate } = req.params;
  const query =
    startDate !== '0' && endDate !== '0'
      ? {
          canceled: true,
          downpayment: {
            $gte: `${startDate}`,
            $lte: `${endDate}`
          }
        }
      : { canceled: true };
  try {
    res.status(200).json(await Production.find(query));
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getFinished = async (req, res) => {
  const { startDate, endDate } = req.params;
  const query =
    startDate !== '0' && endDate !== '0'
      ? {
          canceled: false,
          finished: true,
          transported: false,
          downpayment: {
            $gte: `${startDate}`,
            $lte: `${endDate}`
          }
        }
      : { canceled: false, finished: true, transported: false };
  try {
    res.status(200).json(await Production.find(query));
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTransported = async (req, res) => {
  const { startDate, endDate } = req.params;
  const query =
    startDate !== '0' && endDate !== '0'
      ? {
          transported: true,
          downpayment: {
            $gte: `${startDate}`,
            $lte: `${endDate}`
          }
        }
      : { transported: true };
  try {
    res.status(200).json(await Production.find(query));
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
