const getRecords = require('./get.records');

module.exports = {
  paths: {
    '/': {
      ...getRecords,
    },
  },
};
