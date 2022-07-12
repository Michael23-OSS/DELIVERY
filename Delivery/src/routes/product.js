const ProductController = require('../controller/product')
const express = require('express')

const router = express.Router()

router.post("/addProduct",ProductController.addProduct)
router.get("/all", ProductController.getAll)
router.delete("/deleteProduct", ProductController.deleteProduct)
router.post("/product/sold", ProductController.findProduct)

module.exports = router