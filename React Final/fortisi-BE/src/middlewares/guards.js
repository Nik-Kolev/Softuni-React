const { secret } = require('../config/config')
const jwt = require('../utils/jwtPromisify')
module.exports.isAuthorized = async (req, res, next) => {
    if (!req.user) {
        return res.status(403).json({ error: 'Unauthorized' })
    } else {
        next()
    }
}

module.exports.isGuest = async (req, res, next) => {
    if (req.user) {
        const token = req.get('x-authorization');
        try {
            const decodedToken = await jwt.verify(token, secret);
            if (decodedToken) {
                return res.status(403).json({ error: 'Already logged in' });
            }
        } catch (err) {
            return res.status(403).json({ error: err });
        }
    } else {
        next();
    }
};
