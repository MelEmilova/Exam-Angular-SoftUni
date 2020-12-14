const express = require("express");
const cookieParser = require('cookie-parser')
const cors = require('cors');


module.exports = (app) => {
  app.use(cors({
    exposedHeaders: "Authorization"
  }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}))

  

};
