const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    // unique: true,
  },
  isAllergy: {
    type: Boolean,
    // required: true,
    default: false
  },

  category: {
    type: String,
    required: true,
    enum: ['VEGETABLES', 'MEAT', 'DAIRY', 'EGGS', 'FRUITS', 'LEGUMES'],
  }

});



module.exports = mongoose.model("Product", ProductSchema);