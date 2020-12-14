const mongoose = require("mongoose");

const TokenBlacklist = new mongoose.Schema({
  token: String
});

module.exports = mongoose.model("TokenBlacklist", TokenBlacklist)