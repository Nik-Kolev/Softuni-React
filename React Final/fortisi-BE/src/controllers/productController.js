const productController = require('express').Router()
const productModel = require('../models/Product')

productController.post('/create', async (req, res) => {
    const { productType, name, quantity, category, price, discount, imageUrl, ...details } = req.body
    const owner = req?.user._id
    try {
        const product = await productModel.create({ productType, name, quantity, category, price, discount, imageUrl, ...details, owner })
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }

})

productController.get('/getByCategory/:category', async (req, res) => {
    const { category } = req.params
    try {
        const products = await productModel.find({ category })
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
    }
})

productController.get('/getSingleProductById/:id', async (req, res) => {
    const { id } = req.params
    console.log('asd')
    try {
        const product = await productModel.findOne({ _id: id })
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }
})

productController.get('/delete/:id', async (req, res) => {
    console.log('asd')
    const { id } = req.params
    console.log(id)
    console.log('-----------------------------')
    await productModel.findOneAndDelete({ _id: id })
    res.status(200).json('Deleted')
})

module.exports = productController