const productController = require('express').Router()
const productModel = require('../models/Product')

productController.post('/create', async (req, res) => {
    const { productType, name, color, description, materials, availability } = req.body
    const owner = req.user
    console.log(owner)

    await productModel.create({ productType, name, color, description, materials, availability, owner })
    res.status(200).json('Nice !')
})

module.exports = productController