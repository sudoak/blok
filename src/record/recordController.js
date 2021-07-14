const recordController = (getRecordsService) => {
  const getRecords = async (req, res) => {
    const records = await getRecordsService(req.body);
    res.json(records);
  };
  return {
    getRecords,
  };
};

module.exports = recordController;
