const isoDateString = (date, eod = false) => {
  const isoTimestamp = new Date(date);
  if (eod) isoTimestamp.setHours(4, 59, 59, 999);
  return isoTimestamp.toISOString();
};

module.exports = {
  isoDateString,
};
