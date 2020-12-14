const { Router } = require("express");
const Recipe = require("../models/Recipe-model");
const Quantity = require('../models/Quantity-model')
const isAuth = require('../utilis/auth');
const router = Router();

router.post('/find-recipe', (req, res, next) => {
  let result = [];
  console.log(result);
  Recipe.find().lean().populate({
    path: "productQuantities",
    populate: {
      path: 'product'
    }
  }).then(data => {
    let { allProducts } = req.body;
    console.log(allProducts);

    data.map(recipe => {
        if (recipe.productQuantities.length === allProducts.length) {
          let count = 0;
          recipe.productQuantities.map(productQuontity => {
    
            allProducts.map(userProduct => {
              if ((productQuontity.product.title.toString().toLowerCase().trim()) === (userProduct.toString().toLowerCase().trim())) {
                count++;
              }
              
            })
            if (count === allProducts.length && count > 0) {
              count = 0;
              result.push(recipe);
            
            }
          });
        }
   
    })
   return res.send(result);
  });

});

router.post("/create-recipe", (req, res, next) => {
  let { title, description, imageUrl, productQuantities } = req.body;
  console.log (typeof(title),title,
  typeof(description), description,
  typeof(imageUrl), imageUrl,
  typeof(productQuantities), productQuantities);
  console.log(req.body);
  Recipe.create({
    title,
    description,
    imageUrl,
    productQuantities
  })
 
    .then((createdRecipe) => {
      console.log("createdRecipe", createdRecipe);
      res.status(200).send('Recipe created')
      return
    })
});

router.get("/all-recipes", (req, res, next) => {
  Recipe.find().lean().populate({
    path:"productQuantities",
    populate: {
      path: 'product'
    }
  })
  .exec((err, data) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      // console.log('All data is:', data);
      res.status(200).send(data)
    }
  })
})











module.exports = router;
