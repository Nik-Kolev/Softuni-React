const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productType: {
        type: String
    },
    name: {
        type: String
    },
    color: {
        type: String
    },
    description: {
        advantages: {
            type: String
        },
        text: {
            type: String
        },
        size: {
            type: String
        },
        materials: {
            type: String
        },
    },
    availability: {
        type: String
    },
    imageUrl: {
        type: String
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product