/* eslint-disable object-curly-newline */
const Record = require('./recordModel');

const recordDAO = () => {
  const fetchRecords = async ({ startDate, endDate, minCount, maxCount }) => {
    const _ = await Record.aggregate([
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: {
            $sum: '$counts',
          },
        },
      },
      {
        $match: {
          totalCount: { $gte: minCount, $lte: maxCount },
          createdAt: { $gt: startDate, $lt: endDate },
        },
      },
    ]);
    return _;
  };
  return { fetchRecords };
};

module.exports = recordDAO;
