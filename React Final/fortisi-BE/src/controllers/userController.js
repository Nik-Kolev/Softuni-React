const userController = require('express').Router()
const userModel = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const { tokenCreator } = require('../utils/tokenCreator')
const { isAuthorized, isGuest } = require('../middlewares/guards')

userController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    let errors = [];

    Object.entries(req.body).forEach(([fieldName, value]) => {
        if (value === '') {
            let errorName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
            errors.push(`${errorName} is required.`);
        }
    });
    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json('Email or password is incorrect.')
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return res.status(404).json('Email or password is incorrect.')
        }

        const token = await tokenCreator(user)
        const data = { firstName: user.firstName, lastName: user.lastName, _id: user._id, email: user.email, admin: user.admin, token }
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        errorHandler(error, res, req);
    }
});

userController.post('/register', isGuest, async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, rePass } = req.body;

    let errors = [];

    Object.entries(req.body).forEach(([fieldName, value]) => {
        if (value === '') {
            let errorName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
            errors.push(`${errorName} is required.`);
        }
    });

    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    try {

        if (password !== rePass) {
            return res.status(404).json('Passwords don`t match.')
        }

        const user = await userModel.exists({ email })

        if (user) {
            return res.status(409).json('Email is already taken.')
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({ firstName, lastName, email, phoneNumber, password: hashedPass });

        const token = await tokenCreator(newUser)

        const data = { firstName: newUser.firstName, lastName: newUser.lastName, _id: newUser._id, email: newUser.email, token }

        res.status(200).json(data);
    } catch (error) {
        errorHandler(error, res, req);
    }
});

userController.post('/logout', (req, res) => {
    //Simple check if there is a token - blacklist or other shit I don`t know is needed for further implementation xD
    if (req.headers.auth) {
        res.status(200).json('Logout successful.')
    } else {
        res.status(404).json('Invalid Token!')
    }
})


userController.post('/resetPassword', isAuthorized, async (req, res) => {
    const { email, password, newPassword } = req.body;
    let errors = [];

    Object.entries(req.body).forEach(([fieldName, value]) => {
        if (value === '') {
            let errorName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
            errors.push(`${errorName} is required.`);
        }
    });
    if (errors.length > 0) {
        return res.status(400).json(errors);
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

userController.post('/liked', async (req, res) => {
    try {
        const { isLiked, _id, userId } = req.body
        if (isLiked) {
            await userModel.findByIdAndUpdate({ _id: userId }, { $pull: { likedProducts: _id } }, { new: true });
            res.status(200).json('Продуктът е премахнат от любими.')
        } else {
            await userModel.findByIdAndUpdate({ _id: userId, likedProducts: { $ne: _id } }, { $push: { likedProducts: _id } }, { new: true });
            res.status(200).json('Продуктът е добавен в любими.')
        }
    } catch (error) {
        errorHandler(error, res, req)
    }


})

userController.get('/liked/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.user?._id
    try {
        const isLiked = !!(await userModel.exists({ _id: userId, likedProducts: id }));
        res.status(200).json(isLiked)
    } catch (error) {
        errorHandler(error, res, req)
    }
})

userController.post('/basket', async (req, res) => {
    const userId = req.user?._id
    const { productId, price, action } = req.body
    console.log(productId)
    console.log(price)
    console.log(action)
    try {
        if (action == 'added') {
            await userModel.findByIdAndUpdate({ _id: userId }, { $push: { storedProducts: { item: productId, price: price } } })
        } else {
            await userModel.findByIdAndUpdate({ _id: userId }, { $pull: { storedProducts: productId } })
        }
        res.status(200).json(`${productId} ${action}`)
    } catch (error) {
        errorHandler(error, res, req)
    }
})

userController.get('/basket', async (req, res) => {
    const userId = req.user?._id
    try {
        const storedProducts = await userModel.findOne({ _id: userId }).select('storedProducts');
        console.log(storedProducts)
        res.status(200).json(storedProducts)
    } catch (error) {
        errorHandler(error, res, req)
    }
})

module.exports = userController