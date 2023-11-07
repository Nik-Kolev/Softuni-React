module.exports.trimmer = (req, res, next) => {
    if (req.body && typeof req.body === 'object') {
        Object.keys(req.body).forEach((key) => {
            req.body[key] = req.body[key].trim();
        });
    }
    next();
};