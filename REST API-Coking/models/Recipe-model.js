const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // unique: true
    },

    description: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        // required: true
    },

    productQuantities: [{
        type: ObjectId,
        ref: 'Quantity',
    }],

    author: {
        type: ObjectId,
        ref: "User"
    }
});


module.exports = mongoose.model("Recipe", RecipeSchema);