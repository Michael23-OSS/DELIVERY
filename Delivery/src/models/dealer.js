const mongoose = require("mongoose");

//Creation of models with mongoose schema
const dealerSchema = mongoose.Schema({
    dealerName: {
        type: String,
        required: true
    },
    dealerID:{
        type: Number,
        required: true,
        unique: true
    },
    dealerPhone: {
        type: Number,
        required: true
    },
    dealerEmail: {
        type: String,
        required: true
    },
    dealerVehicle: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Dealer', dealerSchema);