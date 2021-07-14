/* eslint-disable no-return-await */
const Record = require('./recordModel');
const { fetchRecords } = require('./recordDAO')(Record);

const recordService = () => {
  const getRecordsService = async (payload) => {
    const data = await fetchRecords(payload);
    return data;
  };
  return { getRecordsService };
};

module.exports = recordService;
