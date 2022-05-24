const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    stationName: {
      type: String,
      required: true,
    },
    stationFrequency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Station', stationSchema);
