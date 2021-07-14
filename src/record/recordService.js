/* eslint-disable no-return-await */
const Record = require('./recordModel');

const recordService = () => {
  const getRecordsService = async () => {
    const data = await Record.find();
    console.log(data);
    return data;
  };
  return { getRecordsService };
};

module.exports = recordService;
