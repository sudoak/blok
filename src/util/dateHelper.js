const isoDateString = (date, eod = false) => {
  const timestamp = new Date(date);
  if (eod) timestamp.setHours(4, 59, 59, 999);
  return new Date(timestamp.toISOString());
};

module.exports = {
  isoDateString,
};
