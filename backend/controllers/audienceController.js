const { Customer } = require('../models');

const createAudience = async (req, res) => {
  try {
    const rules = req.body.rules;
    const query = buildQuery(rules);
    const customers = await Customer.findAll({ where: query });
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error in createAudience:", error);
    res.status(500).json({ error: "An error occurred while creating audience." });
  }
};

const checkAudienceSize = async (req, res) => {
  try {
    const rules = req.body.rules;
    const query = buildQuery(rules);
    const customers = await Customer.findAll({ where: query });
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error in checkAudienceSize:", error);
    res.status(500).json({ error: "An error occurred while checking audience size." });
  }
};

const buildQuery = (rules) => {
  let query = {};
  rules.forEach(rule => {
    switch(rule.field) {
      case 'totalSpends':
        query.totalSpends = { [rule.operator]: rule.value };
        break;
      case 'maxVisits':
        query.maxVisits = { [rule.operator]: rule.value };
        break;
      case 'lastVisit':
        query.lastVisit = { [rule.operator]: new Date(new Date() - rule.value * 24 * 60 * 60 * 1000) };
        break;
      default:
        break;
    }
  });
  console.log("Generated Query:", query); 
  return query;
};

module.exports = {
  createAudience,
  checkAudienceSize,
};
