const basicInfo = require('./basic.info');
const servers = require('./doc.server');
const components = require('./components');
const tags = require('./tags');
const records = require('./record');

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  ...records,
};
