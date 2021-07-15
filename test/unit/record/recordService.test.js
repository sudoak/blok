/* eslint-disable no-unused-vars */
const mockingoose = require('mockingoose');
const Record = require('../../../src/record/recordModel');

const { getRecordsService } = require('../../../src/record/recordService')();

const data = [
  {
    key: 'TAKwGc6Jr4i8Z487',
    createdAt: '2017-01-28T01:22:14.398Z',
    totalCount: 310,
  },
  {
    key: 'TAKwGc6Jr4i8Z487',
    createdAt: '2017-01-28T01:22:14.398Z',
    totalCount: 170,
  },
  {
    key: 'TAKwGc6Jr4i8Z487',
    createdAt: '2017-01-28T01:22:14.398Z',
    totalCount: 120,
  },
];

describe('Record Service', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should return valid output when payload in given', async () => {
    const payload = {
      minCount: 0,
      maxCount: 2000,
      startDate: '2017-01-28',
      endDate: '2017-02-30',
    };
    const expectedResult = {
      code: 1,
      msg: 'Success',
      records: data,
    };
    mockingoose(Record).toReturn(data, 'aggregate');
    const result = await getRecordsService(payload);
    expect(result).toEqual(expectedResult);
  });
});
