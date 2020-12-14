"use strict";

var _require = require("express"),
    Router = _require.Router;

var Product = require('../models/Product-model');

var Quantity = require('../models/Quantity-model');

var router = Router();
router.post("/create-quantity", function (req, res, next) {
  var _req$body = req.body,
      quantity = _req$body.quantity,
      quantityType = _req$body.quantityType,
      product = _req$body.product;
  Quantity.create({
    quantity: quantity,
    quantityType: quantityType,
    product: product
  }).then(function (createdQ) {
    console.log('Created', createdQ);
    res.send(createdQ);
  });
});
router.get("/create-quantity", function (req, res) {
  Quantity.find().populate('product').exec(function (err, data) {
    if (err) {
      console.log('ERROR', err);
    } else {
      console.log('All data is:', data);
      res.status(200).send(data);
    }
  });
});
module.exports = router;