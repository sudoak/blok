/* eslint-disable max-len */
require('dotenv').config();
const supertest = require('supertest');
const app = require('../../src/app');

const request = supertest(app);

describe('API Testing', () => {
  let expectedResult;
  let errorResult;

  beforeAll(() => {
    expectedResult = {
      code: 1,
      msg: 'Success',
      records: [
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
      ],
    };
    errorResult = {
      code: 1,
      msg: 'Validation Failed',
    };
  });
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
  });

  it('Should return 200 status code when called with payload', async () => {
    const response = await request.post('/api/v1/records').send({
      minCount: 0,
      maxCount: 2000,
      startDate: '2017-01-28',
      endDate: '2017-02-30',
    });
    expect(response.statusCode).toBe(200);
  });
  it('Should return in range records when called with payload', async () => {
    const { body: records } = await request.post('/api/v1/records').send({
      minCount: 0,
      maxCount: 2000,
      startDate: '2017-01-28',
      endDate: '2017-02-30',
    });
    expect(records).toEqual(expectedResult);
  });

  it('Should return statusCode 400 when called with invalid payload', async () => {
    const { statusCode } = await request.post('/api/v1/records').send({
      minCount: '0',
      maxCount: 2000,
      startDate: '2017-01-28',
      endDate: '2017-02-30',
    });
    expect(statusCode).toEqual(400);
  });

  it('Should return error Response when called with invalid payload', async () => {
    const { body } = await request.post('/api/v1/records').send({
      minCount: '0',
      maxCount: 2000,
      startDate: '2017-01-28',
      endDate: '2017-02-30',
    });
    expect(body).toEqual(errorResult);
  });
});
