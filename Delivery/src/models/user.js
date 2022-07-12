const mongoose = require("mongoose");

//Creation of models with mongoose schema
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userAddress:{
        type: String,
        required: true
    },
    userPhone: {
        type: Number,
        required: true
    },
    userEmail:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);