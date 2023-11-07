const router = require('express').Router()

const userController = require('./controllers/userController')
const quoteController = require('./controllers/quoteController')

router.use('/users', userController)
router.use('/quote', quoteController)

module.exports = router