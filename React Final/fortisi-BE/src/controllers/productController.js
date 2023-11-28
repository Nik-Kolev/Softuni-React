const productController = require('express').Router()
const productModel = require('../models/Product')

productController.post('/create', async (req, res) => {
    const { productType, name, quantity, category, price, imageUrl, ...details } = req.body
    const owner = req?.user._id
    console.log(owner)
    try {
        const product = await productModel.create({ productType, name, quantity, category, price, imageUrl, ...details, owner })
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }

})

productController.get('/:category', async (req, res) => {
    const { category } = req.params
    try {
        const products = await productModel.find({ category })
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
    }
})

productController.get('/:category/:item', async (req, res) => {
    const { category, item } = req.params
    try {
        const product = await productModel.findOne({ category, name: item })
        console.log(product)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }
})

module.exports = productController