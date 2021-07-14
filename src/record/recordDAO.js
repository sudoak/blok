/* eslint-disable object-curly-newline */
const { isoDateString } = require('../util/dateHelper');

const recordDAO = (Record) => {
  const fetchRecords = async ({ startDate, endDate, minCount, maxCount }) => {
    const sD = isoDateString(startDate);
    const eD = isoDateString(endDate, true);
    console.log(sD, eD);

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
          createdAt: { $gt: new Date(sD), $lt: new Date(eD) },
        },
      },
    ]);
    return _;
  };
  return { fetchRecords };
};

module.exports = recordDAO;
