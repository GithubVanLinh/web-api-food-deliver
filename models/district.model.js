const mongoose = require("mongoose");

const DistrictSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: (v) => /^[0-9a-zA-Z\s]*$/.test(v),
    set: (v) => v.toLowerCase(),
    get: (v) => v.toLowerCase(),
  },
});

module.exports = mongoose.model("districts", DistrictSchema);
