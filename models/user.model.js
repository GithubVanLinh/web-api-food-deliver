const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: (v) => /^[0-9a-zA-Z]*$/.test(v),
    set: (v) => v.toLowerCase(),
    get: (v) => v.toLowerCase(),
  },
  password: {
    type: String,
    required: true,
    validate: (v) => /^[0-9a-zA-Z]*$/.test(v),
  },
  name: {
    type: String,
    required: true,
    validate: (v) => /^[0-9a-zA-Z\s]*$/.test(v),
  },
  wishlist: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("users", UserSchema);
