/* eslint-disable no-unused-vars */
/**
 * code : 0 -> Success
 * code : 1 -> Data input discripancies
 * code : 2 -> Server related issues
 */

const { ValidationError } = require('express-validation');

const errorMiddleware = (err, _req, res, _next) => {
  const httpCode = err.status || err.statusCode || 500;
  let code = err.code || 2;
  const msg = err.message || err.msg || 'Failure';

  if (err instanceof ValidationError) {
    code = 1;
  }
  res.status(httpCode);
  res.json({
    code,
    msg,
  });
};

module.exports = errorMiddleware;
