const jwt = require('../utils/jwtPromisify')
const { secret } = require('../config/config')

module.exports.authentication = async (req, res, next) => {
    const token = req.headers['x-authorization']

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, secret)
            if (decodedToken) {
                req.user = decodedToken
            } else {
                return res.status(401).json({ error: 'Invalid Token' })
            }
        } catch (err) {
            return res.status(401).json({ error: err })
        }
    }
    next()
}