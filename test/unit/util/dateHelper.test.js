const { isoDateString } = require('../../../src/util/dateHelper');

describe('Date Helper', () => {
  it('Should return ISO Timestamp when called with date', () => {
    // arrange
    const date = '2017-01-28';
    const expectedResult = isoDateString(date);

    // action
    const result = isoDateString(date);

    // assert
    expect(result).toEqual(expectedResult);
  });

  it('Should return ISO Timestamp when called with date and eod is true', () => {
    // arrange
    const date = '2017-01-28';
    const expectedResult = isoDateString(date, true);

    // action
    const result = isoDateString(date, true);

    // assert
    expect(result).toEqual(expectedResult);
  });
});
