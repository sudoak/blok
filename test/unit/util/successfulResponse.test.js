const successfulResponse = require('../../../src/util/successfulResponse');

describe('Successful Response', () => {
  it('Should return required response when called with data', () => {
    const data = [
      {
        key: 'adadad234',
        totalCount: 1000,
        createdAt: '2017-01-28 01:22:14.398Z',
      },
    ];

    const expectedResult = {
      code: 1,
      msg: 'Success',
      records: [
        {
          key: 'adadad234',
          totalCount: 1000,
          createdAt: '2017-01-28 01:22:14.398Z',
        },
      ],
    };

    const result = successfulResponse(data);

    expect(result).toEqual(expectedResult);
  });
});
