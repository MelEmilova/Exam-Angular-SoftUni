"use strict";

var mongoose = require("mongoose");

var _require = require("mongodb"),
    ObjectId = _require.ObjectId;

var QuantitySchema = new mongoose.Schema({
  quantity: {
    type: String,
    required: true
  },
  quantityType: {
    type: String,
    required: true
  },
  product: {
    type: ObjectId,
    ref: 'Product'
  }
});
module.exports = mongoose.model("Quantity", QuantitySchema);