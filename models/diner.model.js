const mongoose = require('../database/db');

var dinerSchema = new mongoose.Schema({
    name: String,
    district: String,
    street: String,
    number: String,
    menu: [Object],
    description: String,
    average: {type: Number, default: 100},
    timeOpen: Number,
    timeClose: Number
});


module.exports = mongoose.model('Diner', dinerSchema);