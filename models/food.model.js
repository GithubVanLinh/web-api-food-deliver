const mongoose = require('../database/db');

var foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    discription: String,
    diner: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: "Diner"}]
});

module.exports = mongoose.model('Food', foodSchema);
