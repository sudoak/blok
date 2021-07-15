const { fetchRecords } = require('./recordDAO')();
const { isoDateString } = require('../util/dateHelper');
const successfulResponse = require('../util/successfulResponse');

const recordService = () => {
  const getRecordsService = async (payload) => {
    const processedStartDate = isoDateString(payload.startDate);
    const processedEndDate = isoDateString(payload.endDate, true);
    const processedPayload = {
      ...payload,
      startDate: processedStartDate,
      endDate: processedEndDate,
    };

    const data = await fetchRecords(processedPayload);
    return successfulResponse(data);
  };
  return { getRecordsService };
};

module.exports = recordService;
