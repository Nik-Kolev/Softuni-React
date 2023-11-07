const mongoose = require('mongoose')

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of product is required !'],
        minLength: [10, 'Name of the product must be at least 10 characters long !'],
    },
    type: {
        type: String,
        required: [true, 'Product type is required !'],
        minLength: [2, 'Product type must be at least 2 characters long !'],
    },
    damages: {
        type: String,
        required: [true, 'Damage description is required !'],
        minLength: [10, 'Damage description must be at least 10 characters long !'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Electronic image is required !'],
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value);
            },
            message: 'ImageUrl must be a valid URL starting with http:// or https://',
        },
    },
    description: {
        type: String,
        required: [true, 'Product description is required !'],
        minLength: [10, 'Product description must be between 10 and 200 characters long !'],
        maxLength: [200, 'Product description must be between 10 and 200 characters long !'],
    },
    production: {
        type: Number,
        required: [true, 'Year of production is required !'],
        min: [1900, 'Year of production must be between 1900 and 2023 !'],
        max: [2023, 'Year of production must be between 1900 and 2023 !'],
    },
    exploitation: {
        type: Number,
        required: [true, 'Exploitation period is required !'],
        min: [1, 'Exploitation period can not be negative number or zero !']
    },
    price: {
        type: Number,
        required: [true, 'Price is required !'],
        min: [1, 'Price can not be negative number or zero !']
    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
})

const Electronic = mongoose.model('Electronic', electronicSchema)

module.exports = Electronic