const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: [3, 'First name should be at least 3 characters long!'],
        },
        lastName: {
            type: String,
            required: true,
            minLength: [3, 'Last name should be at least 3 characters long!'],
        },
        email: {
            type: String,
            required: true,
            // match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            // match: [/^0[1-9]{1}[0-9]{8}$/, 'Phone number is not valid!'],
        },
        admin: {
            type: String
        },
        likedProducts: [{
            type: String
        }],
        storedProducts: [{
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            imageUrl: {
                type: String
            },
            productType: {
                type: String
            },
            name: {
                type: String
            }
        }],
        address: {
            city: { type: String, default: '' },
            street: { type: String, default: '' },
            streetNumber: { type: String, default: '' },
            block: { type: String, default: '' },
            entrance: { type: String, default: '' },
            floor: { type: String, default: '' },
            apartment: { type: String, default: '' },
            description: { type: String, default: '' }
        }
    },
);

const User = mongoose.model('User', userSchema)

module.exports = User