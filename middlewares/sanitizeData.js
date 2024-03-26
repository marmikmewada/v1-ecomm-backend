// sanitizeData.js
const { validationResult } = require('express-validator');

const sanitizeData = (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If no validation errors, proceed to the next middleware
  next();
};

module.exports = sanitizeData;
