const jwt = require('./jwt-token');
const config = require('../config/config');
const TokenBlacklist = require('../models/TokenBlacklist-model');
const User =require('../models/User-model');


module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.authCookieName] || '';

        Promise.all([
            jwt.verifyToken(token),
            TokenBlacklist.findOne({ token })
        ])
            .then(([data, blacklistToken]) => {
                if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                User.findById(data.id)
                    .then((user) => {
                        req.user = user;
                        next();
                    });
            })
            .catch(err => {
                if (!redirectAuthenticated) { next(); return; }

                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    res.status(401).send('UNAUTHORIZED!');
                    return;
                }

                next(err);
            })
    }

};