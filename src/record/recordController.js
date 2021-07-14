/* eslint-disable no-return-await */
const recordController = (getRecordsService) => {
  // eslint-disable-next-line no-unused-vars
  const getRecords = async (_req, res) => {
    const records = await getRecordsService();
    res.json(records);
  };
  return {
    getRecords,
  };
};

module.exports = recordController;
