"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require("express"),
    Router = _require.Router;

var Recipe = require("../models/Recipe-model");

var Quantity = require('../models/Quantity-model');

var isAuth = require('../utilis/auth');

var router = Router();
router.post('/find-recipe-meat', function (req, res) {
  var resultMeat = [];
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(function (data) {
    var category = req.body.category;
    console.log(category);
    data.map(function (recipe) {
      recipe.productQuantities.map(function (quant) {
        if (quant.product.category === category) {
          resultMeat.push(recipe);
        }
      });
    });
    console.log(resultMeat);
    return res.send(resultMeat);
  });
});
router.post('/find-recipe-dairy', function (req, res) {
  var resultMeat = [];
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(function (data) {
    var category = req.body.category;
    console.log(category);
    data.map(function (recipe) {
      recipe.productQuantities.map(function (quant) {
        if (quant.product.category === category) {
          resultMeat.push(recipe);
        }
      });
    });
    console.log(resultMeat);
    return res.send(resultMeat);
  });
});
router.post('/find-recipe-vegetables', function (req, res) {
  var resultMeat = [];
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(function (data) {
    var category = req.body.category;
    console.log(category);
    data.map(function (recipe) {
      recipe.productQuantities.map(function (quant) {
        if (quant.product.category === category) {
          resultMeat.push(recipe);
        }
      });
    });
    console.log(resultMeat);
    return res.send(resultMeat);
  });
});
router.post('/find-recipe-legumes', function (req, res) {
  var resultMeat = [];
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(function (data) {
    var category = req.body.category;
    console.log(category);
    data.map(function (recipe) {
      recipe.productQuantities.map(function (quant) {
        if (quant.product.category === category) {
          resultMeat.push(recipe);
        }
      });
    });
    return res.send(resultMeat);
  });
});
router.get('/recipe-details/:id', function (req, res) {
  var id = req.params; // console.log("id",typeof(id.id));

  var selected;
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(function (data) {
    data.map(function (recipe) {
      // console.log('recipe-id', recipe._id);
      // return res(recipe._id)
      if (recipe._id == id.id) {
        console.log(recipe);
        return res.send(recipe);
      }
    });
  });
});
router.post('/find-recipe', function (req, res, next) {
  var result = [];
  console.log(result);
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(function (data) {
    var allProducts = req.body.allProducts;
    console.log(allProducts);
    data.map(function (recipe) {
      if (recipe.productQuantities.length === allProducts.length) {
        var count = 0;
        recipe.productQuantities.map(function (productQuontity) {
          allProducts.map(function (userProduct) {
            if (productQuontity.product.title.toString().toLowerCase().trim() === userProduct.toString().toLowerCase().trim()) {
              count++;
            }
          });

          if (count === allProducts.length && count > 0) {
            count = 0;
            result.push(recipe);
          }
        });
      }
    });
    return res.send(result);
  });
});
router.post("/create-recipe", function (req, res, next) {
  var _req$body = req.body,
      title = _req$body.title,
      description = _req$body.description,
      imageUrl = _req$body.imageUrl,
      productQuantities = _req$body.productQuantities;
  console.log(_typeof(title), title, _typeof(description), description, _typeof(imageUrl), imageUrl, _typeof(productQuantities), productQuantities);
  console.log(req.body);
  Recipe.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    productQuantities: productQuantities
  }).then(function (createdRecipe) {
    console.log("createdRecipe", createdRecipe);
    res.status(200).send('Recipe created');
    return;
  });
});
router.get("/all-recipes", function (req, res, next) {
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).exec(function (err, data) {
    if (err) {
      console.log('ERROR', err);
    } else {
      // console.log('All data is:', data);
      res.status(200).send(data);
    }
  });
});
module.exports = router;