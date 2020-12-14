const { Router } = require("express");
const router = Router();
const Product = require('../models/Product-model');

router.get("/getAll-products", (req, res, next) => {
  let result = {};
  Product
    .find()
    .lean()
    .then((products) => {
      products.map((product) => {
        if (!result.hasOwnProperty(product.category)) {
          result[product.category] = [];
        }

        result[product.category].push(product)
      })
      return res.send(result)
    })
    .catch(next)
})



router.post("/create-product", (req, res, next) => {
  let { title, category } = req.body;

  Product.create({
    title,
    category

  }).then((createdProduct) => {
    console.log(createdProduct);
    res.status(201)
    res.send(createdProduct)
  });
});

module.exports = router;