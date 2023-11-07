const jwt = require('../utils/jwtPromisify')
const { secret } = require('../config/config')

module.exports.authentication = async (req, res, next) => {
    const token = req.headers['x-authorization']
    console.log(token)
    if (token) {
        try {
            const decodedToken = await jwt.verify(token, secret)
            req.user = decodedToken
        } catch (err) {
            return res.status(401).json({ error: err })
        }
    }
    next()
}