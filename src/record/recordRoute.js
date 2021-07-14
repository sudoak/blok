/* eslint-disable no-undef */
const express = require('express');
const { getRecordsService } = require('./recordService')();
const { getRecords } = require('./recordController')(getRecordsService);

const router = express.Router();

router.post('/records', getRecords);

module.exports = router;
