/* eslint-disable newline-per-chained-call */
const { validate, Joi } = require('express-validation');
const { dateRegex } = require('../util/regex');

const recordValidation = {
  body: Joi.object({
    minCount: Joi.number().integer().required().strict(),
    maxCount: Joi.number().integer().required().strict(),
    startDate: Joi.string().regex(dateRegex).required(),
    endDate: Joi.string().regex(dateRegex).required(),
  }),
};

module.exports = validate(recordValidation, {}, {});
