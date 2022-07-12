//Model
const mongoose = require("mongoose");

//Creation of models with mongoose schema
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productPrice:{
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String
    }
});

module.exports = Product = mongoose.model('Product', productSchema);