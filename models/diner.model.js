const mongoose = require('../database/db');

var dinerSchema = new mongoose.Schema({
    name: String,
    address: {type: mongoose.Types.ObjectId, ref: 'Address', required: true},
    menu: [{type: mongoose.Types.ObjectId, ref: 'Food'}],
    timeOpen: Number,
    timeClose: Number
});


module.exports = mongoose.model('Diner', dinerSchema);