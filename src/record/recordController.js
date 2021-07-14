/* eslint-disable no-return-await */
const recordController = (getRecordsService) => {
  // eslint-disable-next-line no-unused-vars
  const getRecords = async (req, res) => {
    const records = await getRecordsService(req.body);
    res.json(records);
  };
  return {
    getRecords,
  };
};

module.exports = recordController;
