//Controller

const mongoose = require('mongoose')
const Product = require('../models/product')

const addProduct = (req, res) => {
    let product = new Product({
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productPrice: req.body.productPrice,
        productQuantity: req.body.productQuantity,
        productDescription: req.body.productDescription,
    })
    product.save((err,pc) => {
        err && res.status(500).send(err.message)
        res.status(200).json(pc)
        console.log(pc)
    })
}

const findProduct = (req, res) => {
    Product.find({productName: req.body.productName}, (err, products) => {
        err && res.status(500).send(err.message)
        const newProductArray= convert(products)
        res.status(200).send(newProductArray)
    })
}

const getAll = (req, res) => {
    Product.find((err, products) => {
        err && res.status(500).send(err.message)
        res.status(200).json(products)
    })
}

const deleteProduct = (req,res) => {
    Product.findOneAndDelete({productName: req.body.productName, productBrand: req.body.productBrand},(err,product)=>{
        err && res.status(500).send(err.message)
        res.status(200).send(product)
    })
}

const convert = (array) => {
    const newArray = []
    array.map(a =>
        newArray.push({productDescription: a.productDescription, subtotal: a.productPrice, iva: calculateIva(a.productPrice), total: calculateTotal(a.productPrice)})
    )
    return newArray
}

const calculateIva = (mount) => {
    return mount*0.12
}

const calculateTotal = (mount) => {
    return calculateIva(mount) + mount
}

module.exports = {addProduct, findProduct, deleteProduct, getAll}