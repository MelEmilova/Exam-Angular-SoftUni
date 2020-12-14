"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var env = process.env.NODE_ENV || "development";

var config = require('../config/config')[env];

var User = require("../models/User-model");

var _require = require("../utilis/jwt-token"),
    createToken = _require.createToken,
    verifyToken = _require.verifyToken;

var auth = require('../utilis/auth');

var _require2 = require("express"),
    Router = _require2.Router;

var tokenBlacklistModel = require('../models/TokenBlacklist-model');

var router = Router();
router.post("/login", function (req, res, next) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  User.findOne({
    email: email
  }).then(function (user) {
    return Promise.all([user.passwordsMatch(password), user]);
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        match = _ref2[0],
        user = _ref2[1];

    if (!match) {
      res.status(401).send('Invalid password must be et least 8 characters');
      return;
    } // console.log(user);


    var token = createToken({
      id: user._id
    });
    res.header('Authorization', token).send(user);
  })["catch"](next);
});
router.post("/verify", function (req, res, next) {
  var token = req.body.token || '';
  Promise.all([verifyToken(token), tokenBlacklistModel.findOne({
    token: token
  })]).then(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        data = _ref4[0],
        blacklistToken = _ref4[1];

    if (blacklistToken) {
      return Promise.reject(new Error('blacklisted token'));
    }

    User.findById(data.id).then(function (user) {
      return res.send({
        status: true,
        user: user
      });
    });
  })["catch"](function (err) {
    if (!auth.redirectAuthenticated) {
      next();
      return;
    }

    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
      res.status(401).send('UNAUTHORIZED!');
      return;
    }

    res.send({
      status: false
    });
  });
});
router.get("/register", function (req, res, next) {
  res.sendStatus(200);
});
router.post("/register", function (req, res, next) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
  User.create({
    email: email,
    password: password
  }).then(function (createdUser) {
    var token = createToken({
      id: createdUser._id
    });
    res.header('Authorization', token).send(createdUser);
    console.log("OK Created", createdUser);
  })["catch"](function (err) {
    console.log('ERROR', err);
  });
});
router.post("/logout", function (req, res, next) {
  var token = req.cookies[config.authCookieName];
  console.log('-'.repeat(100));
  console.log(token);
  console.log('-'.repeat(100));
  tokenBlacklistModel.create({
    token: token
  }).then(function () {
    res.clearCookie(config.authCookieName).send("Logout successfully!");
  })["catch"](next);
});
router["delete"]("/delete_user", function (req, res, next) {
  var id = req.params.id;
  User.deleteOne({
    _id: id
  }).then(function (removedUser) {
    return res.send(removedUser);
  })["catch"](next);
});
module.exports = router;