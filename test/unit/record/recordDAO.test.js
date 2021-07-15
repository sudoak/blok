const mockingoose = require('mockingoose');
const Record = require('../../../src/record/recordModel');

const { fetchRecords } = require('../../../src/record/recordDAO')();

describe('Record DAO', () => {
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
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should return expected array of records when valid input is given', async () => {
    const input = {
      minCount: 0,
      maxCount: 2000,
      startDate: '2017-01-28',
      endDate: '2017-02-30',
    };
    mockingoose(Record).toReturn(data, 'aggregate');
    const result = await fetchRecords(input);
    expect(result).toEqual(data);
  });
});
