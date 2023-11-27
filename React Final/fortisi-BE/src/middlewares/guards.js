const { secret } = require('../config/config')
const jwt = require('../utils/jwtPromisify')
module.exports.isAuthorized = async (req, res, next) => {
    console.log(req.user)
    if (!req.user) {
        return res.status(404).json('Unauthorized')
    } else {
        next()
    }
}

module.exports.isGuest = async (req, res, next) => {
    if (req.user) {
        const token = req.get('auth');
        try {
            const decodedToken = await jwt.verify(token, secret);
            if (decodedToken) {
                return res.status(403).json('Already logged in');
            }
        } catch (err) {
            return res.status(404).json(err);
        }
    } else {
        next();
    }
};
