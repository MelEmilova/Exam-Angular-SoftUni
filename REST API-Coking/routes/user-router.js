const env = process.env.NODE_ENV || "development";
const config = require('../config/config')[env];

const User = require("../models/User-model");
const { createToken, verifyToken } = require("../utilis/jwt-token");
const auth = require('../utilis/auth')
const { Router } = require("express");
const tokenBlacklistModel = require('../models/TokenBlacklist-model');
const router = Router();


router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => Promise.all([user.passwordsMatch(password), user]))
    .then(([match, user]) => {
      if (!match) {
        res.status(401).send('Invalid password must be et least 8 characters');
        return;
      }
      // console.log(user);
      const token = createToken({ id: user._id });
      res.header('Authorization', token).send(user)
    })
    .catch(next)
});


router.post("/verify", (req, res, next) => {
  const token = req.body.token || '';

  Promise.all([
    verifyToken(token),
    tokenBlacklistModel.findOne({ token })
  ])
    .then(([data, blacklistToken]) => {
      if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

      User.findById(data.id)
        .then((user) => {
          return res.send({
            status: true,
            user
          });
        });
    })
    .catch(err => {
      if (!auth.redirectAuthenticated) { next(); return; }

      if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
        res.status(401).send('UNAUTHORIZED!');
        return;
      }

      res.send({
        status: false
      });
    });
});


router.get("/register", (req, res, next) => {
  res.sendStatus(200)
});

router.post("/register", (req, res, next) => {
  const { email, password } = req.body;

  User.create({ email, password })
    .then((createdUser) => {
      const token = createToken({ id: createdUser._id });
      res.header('Authorization', token).send(createdUser)
      console.log("OK Created", createdUser);
    })
    .catch((err) => {
      console.log('ERROR', err);
    });
});



router.post("/logout", (req, res, next) => {
  const token = req.cookies[config.authCookieName];
  console.log('-'.repeat(100));
  console.log(token);
  console.log('-'.repeat(100));
  tokenBlacklistModel.create({ token })
    .then(() => {
      res.clearCookie(config.authCookieName).send("Logout successfully!");
    })
    .catch(next);
});


router.delete("/delete_user", (req, res, next) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then((removedUser) => res.send(removedUser))
    .catch(next)
});

module.exports = router;

