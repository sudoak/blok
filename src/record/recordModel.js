/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      require: [true, 'record must have a key'],
      unique: true,
    },
    totalCount: {
      type: Number,
      required: [true, 'record must have totalCount'],
    },
  },
  { timestamps: true }
);

const Record = mongoose.model('records', recordSchema);

module.exports = Record;
