const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: (v) => /^[0-9a-zA-Z\s]*$/.test(v),
    unique: true,
  },
});

module.exports = mongoose.model("types", TypeSchema);
