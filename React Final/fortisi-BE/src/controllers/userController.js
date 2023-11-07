const userController = require('express').Router()
const userModel = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const { tokenCreator } = require('../utils/tokenCreator')
const { isAuthorized, isGuest } = require('../middlewares/guards')

userController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await userModel.findOne({ email });

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return res.status(404).json({ error: 'Email or password is incorrect !' })
        }

        if (!user) {
            return res.status(404).json({ error: 'Email or password is incorrect !' })
        }

        const token = await tokenCreator(user)
        const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, token }
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        errorHandler(error, res, req);
    }
});

userController.post('/register', isGuest, async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, rePass } = req.body;

    try {

        if (password !== rePass) {
            return res.status(401).json({ error: 'Passwords don`t match' })
        }

        const user = await userModel.exists({ email })

        if (user) {
            return res.status(409).json({ error: 'Email is already taken!' })
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({ firstName, lastName, email, phoneNumber, password: hashedPass });

        const token = await tokenCreator(newUser)

        const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, token }

        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
});

userController.get('/logout', isAuthorized, (req, res) => {
    res.status(200).json({ Success: 'User logged out.' })
})


userController.post('/resetPassword', isAuthorized, async (req, res) => {
    const { email, password, newPassword } = req.body;
    if (!email) {
        return res.status(404).json({ error: 'Email is required' })
    }
    if (!password) {
        return res.status(404).json({ error: 'Password is required' })
    }
    if (!newPassword) {
        return res.status(404).json({ error: 'New Password is required' })
    }

    try {
        const user = await userModel.findOne({ email });

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return res.status(404).json({ error: 'Email or password is incorrect !' })
        }

        if (!user) {
            return res.status(404).json({ error: 'Email or password is incorrect !' })
        }

        const newHashedPassword = await bcrypt.hash(newPassword, 10)

        const updatedUser = await userModel.findByIdAndUpdate({ _id: user._id }, { password: newHashedPassword }, { new: true })
        const token = await tokenCreator(updatedUser)
        const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, token }
        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
});

module.exports = userController