/* eslint-disable newline-per-chained-call */
const { validate, Joi } = require('express-validation');

const recordValidation = {
  body: Joi.object({
    minCount: Joi.number().integer().positive().min(0).required(),
    maxCount: Joi.number().integer().positive().min(0).required(),
    startDate: Joi.string().required(),
    endDate: Joi.string().required(),
  }),
};

module.exports = validate(recordValidation, {}, {});
