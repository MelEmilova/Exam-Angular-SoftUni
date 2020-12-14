const { Router } = require("express");
const router = Router();
const Product = require('../models/Product-model')
const Quantity =require('../models/Quantity-model')
const Recipe = require('../models/Recipe-model')

router.get("/", (req, res) => {
    res.send('HELLO')
  });


  

  
 

  module.exports = router;