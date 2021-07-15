const { ValidationError } = require('express-validation');

const errorMiddleware = require('../../../src/middleware/errorMiddleware');

describe('Error Middleware', () => {
  let err;
  let req;
  let res;
  let next;

  beforeEach(() => {
    err = {
      statusCode: 500,
      msg: 'Failure',
      code: 2,
    };
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    next = jest.fn();
  });

  it('Should return Response when called', () => {
    errorMiddleware(err, req, res, next);
    expect(res.json).toHaveBeenCalled();
  });

  it('Should return error Response when called', () => {
    const expectedResult = {
      code: 2,
      msg: 'Failure',
    };
    errorMiddleware(err, req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expectedResult);
  });

  it('Should return error Response when err is ValidationError', () => {
    const expectedResult = {
      code: 1,
      msg: 'Validation Failed',
    };
    const options = {
      statusCode: 400,
    };
    err = new ValidationError({}, options);
    errorMiddleware(err, req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expectedResult);
  });
});
