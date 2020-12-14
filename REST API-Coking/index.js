const env = process.env.NODE_ENV || "development";
const mongoose = require("mongoose");
const config = require("./config/config")[env];
const express = require("express");

const homeRouter = require("./routes/home");
const userRouter = require("./routes/user-router");

const productRouter = require('./routes/product-router');
const quantityRouter = require('./routes/quantity-router');
const recipeRouter = require('./routes/recipe-router');

const app = express();

mongoose.connect(
  config.dataBaseURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  function (err) {
    if (err) {
      console.error("Error whith DB");
      throw err;
    }
    console.log(`${'*'.repeat(7)}Database work corectly!"${'*'.repeat(7)}`);

    require("./config/express")(app);

    app.use("/", homeRouter);
    app.use('/', userRouter);
    app.use('/', productRouter);
    app.use('/', quantityRouter)
    app.use('/', recipeRouter);

    app.listen(
      config.port,
      console.log(`Listening on port ${config.port}! Now its up to you...`)
    );
  }
);
