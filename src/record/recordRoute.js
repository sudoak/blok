/* eslint-disable no-undef */
const express = require('express');
const { getRecordsService } = require('./recordService')();
const { getRecords } = require('./recordController')(getRecordsService);

const router = express.Router();

router.get('/records', getRecords);

module.exports = router;
