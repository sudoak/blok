const recordController = (getRecordsService) => {
  const getRecords = async (req, res) => {
    console.log(req);
    const records = await getRecordsService(req.body);
    res.status(201).json(records);
  };
  return {
    getRecords,
  };
};

module.exports = recordController;
