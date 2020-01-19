// import model
const Production = require('../models/productions.model');

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
