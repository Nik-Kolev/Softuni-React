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
            }
        }],
        address: {
            country: {
                type: String,
                // required: true,
                default: ''
                // minLength: [2, 'Country should be at least 2 characters long!'],
            },
            city: {
                type: String,
                default: ''
                // required: true,
                // minLength: [3, 'City should be at least 3 characters long!'],
            },
            street: {
                type: String,
                default: ''
                // required: true,
                // minLength: [3, 'Street should be at least 3 characters long!'],
            },
            streetNumber: {
                type: Number,
                default: 0
                // required: true,
                // min: [1, 'Street number should be a positive number!'],
            },
            buildingInformation: {
                type: String,
                default: ''
            },
            extraInformation: {
                type: String,
                default: ''
            }
        },
    },
);

const User = mongoose.model('User', userSchema)

module.exports = User