const mongoose = require("mongoose");

//Creation of models with mongoose schema
const paySchema = mongoose.Schema({
    creditCard: {
        type: Number,
        required: true,
        unique: true
    },
    payEmail: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Payment', paySchema);