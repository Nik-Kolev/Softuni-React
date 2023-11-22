const productController = require('express').Router()
const productModel = require('../models/Product')

productController.post('/create', async (req, res) => {
    const { productType, name, quantity, price, imageUrl, details } = req.body
    const owner = req?.user._id

    try {
        const product = await productModel.create({ productType, name, quantity, price, imageUrl, details, owner })
        console.log(product)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }

})

module.exports = productController