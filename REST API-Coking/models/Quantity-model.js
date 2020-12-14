const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");


const QuantitySchema = new mongoose.Schema({
    quantity: {
        type: String,
        required: true,
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