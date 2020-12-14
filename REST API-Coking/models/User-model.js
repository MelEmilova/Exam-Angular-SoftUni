const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ObjectID } = require("mongodb");
const saltRound = 11;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    match: /^[A-Za-z0-9]+$/g
  },

  recipes: [{ 
    type: ObjectID,
    ref: "Recipe" }]
});

UserSchema.methods = {
    passwordsMatch(password){
        return bcrypt.compare(password, this.password)
    }
}


UserSchema.pre("save", function (next) {
  if (this.isModified('password')) {
    bcrypt.genSalt(saltRound, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
           next(err);
           return
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);

