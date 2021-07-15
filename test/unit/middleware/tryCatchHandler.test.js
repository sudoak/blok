const tryCatchHandler = require('../../../src/middleware/tryCatchHandler');

describe('Try Catch Middleware', () => {
  it('Should call passed function when called with it', async () => {
    const fn = jest.fn();
    tryCatchHandler(fn)();
    expect(fn).toBeCalled();
  });

  it('Should call next function when called with fn which throws error', async () => {
    const fn = jest.fn(() => {
      throw new Error();
    });
    const next = jest.fn();
    const req = jest.fn();
    const res = jest.fn();
    tryCatchHandler(fn)(req, res, next);
    expect(next).toBeCalled();
  });
});
