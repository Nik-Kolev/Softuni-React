const User = require("../models/User");
const tokenHandler = require('../utils/tokenHandler')
const bcrypt = require('bcrypt')

module.exports.register = async (userData) => {
    const { email, username, password, rePassword } = userData
    const user = await User.exists({ email })

    if (user) {
        throw new Error('User with such email already exists!')
    }

    const newUser = await User.create({ email, username, password, rePassword })

    return tokenHandler.tokenCreator(newUser, { expiresIn: '2d' })
}

module.exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Email or password is incorrect !')
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error('Email or password is incorrect !')
    }

    return tokenHandler.tokenCreator(user, { expiresIn: '2d' })
}