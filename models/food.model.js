const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: (v) => /^[0-9a-zA-Z\s]*$/.test(v),
  },
  searchName: {
    type: String,
    set: (v) => v.toLowerCase(),
    get: (v) => v.toLowerCase(),
  },
  types: {
    type: [mongoose.Types.ObjectId],
    ref: "types",
  },
  categories: {
    type: [mongoose.Types.ObjectId],
    ref: "categories",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  street: {
    type: mongoose.Types.ObjectId,
    ref: "streets",
  },
  district: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "districts",
  },
  address: String,
  area: {
    type: mongoose.Types.ObjectId,
    ref: "areas",
  },
  rating: {
    type: Number,
    required: true,
    default: 5,
    min: 0,
    max: 5,
  },
  open: {
    type: String,
    required: true,
    default: "00:00",
    validate: (v) => {
      if (/^[0-2][0-9]:[0-6][0-9]$/i.test(v)) {
        const arr = v.split(":");
        if (+arr[0] < 24 && +arr[1] < 60) {
          return true;
        }
      }
      return false;
    },
  },
  close: {
    type: String,
    required: true,
    default: "00:00",
    validate: (v) => {
      if (/^[0-2][0-9]:[0-6][0-9]$/i.test(v)) {
        const arr = v.split(":");
        if (+arr[0] < 24 && +arr[1] < 60) {
          return true;
        }
      }
      return false;
    },
  },
});

FoodSchema.pre("save", (next) => {
  this.searchName = this.name;
  next();
});

FoodSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("foods", FoodSchema);
