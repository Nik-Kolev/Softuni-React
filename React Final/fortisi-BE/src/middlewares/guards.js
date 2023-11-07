module.exports.isAuthorized = async (req, res, next) => {
    console.log(req.user)
    if (!req.user) {
        return res.status(403).json({ error: 'Unauthorized' })
    } else {
        next()
    }
}

module.exports.isGuest = (req, res, next) => {
    if (!req.user) {
        next()
    } else {
        return res.status(403).json({ error: 'Already logged in' });
    }
}