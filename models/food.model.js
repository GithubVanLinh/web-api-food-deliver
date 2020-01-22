const mongoose = require('../database/db');

var foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    rate: Number
});

module.exports = mongoose.model('Food', foodSchema);
