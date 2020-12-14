"use strict";

var _require = require("express"),
    Router = _require.Router;

var router = Router();

var Product = require('../models/Product-model');

router.get("/getAll-products", function (req, res, next) {
  var result = {};
  Product.find().lean().then(function (products) {
    products.map(function (product) {
      if (!result.hasOwnProperty(product.category)) {
        result[product.category] = [];
      }

      result[product.category].push(product);
    });
    return res.send(result);
  })["catch"](next);
});
router.post("/create-product", function (req, res, next) {
  var _req$body = req.body,
      title = _req$body.title,
      category = _req$body.category;
  Product.create({
    title: title,
    category: category
  }).then(function (createdProduct) {
    console.log(createdProduct);
    res.status(201);
    res.send(createdProduct);
  });
});
module.exports = router;