/* eslint-disable comma-dangle */
const express = require('express');
const { getRecordsService } = require('./recordService')();
const { getRecords } = require('./recordController')(getRecordsService);
const tryCatchHandler = require('../middleware/tryCatchHandler');
const recordValidationMiddleware = require('./recordValidationMiddleware');

const router = express.Router();

router.post(
  '/records',
  recordValidationMiddleware,
  tryCatchHandler(getRecords)
);

module.exports = router;
