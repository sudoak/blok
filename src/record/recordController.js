const recordController = (getRecordsService) => {
  const getRecords = async (req, res) => {
    const records = await getRecordsService(req.body);
    res.status(200).json(records);
  };
  return {
    getRecords,
  };
};

module.exports = recordController;
