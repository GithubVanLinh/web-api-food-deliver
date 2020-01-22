const mongoose = require('../database/db');

var addressSchema = new mongoose.Schema({
    district: {type: String, required: true},
    street: {type: String, required: true},
    number: {type: String, required: true}
});


addressSchema.virtual('fullAddress').get(function(){
    return "Số "+ this.number + ",Đường "+ this.street + " Quận " +this.district;
});
module.exports = mongoose.model('Address', addressSchema);