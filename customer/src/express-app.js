const express = require("express");
const cors = require("cors");
const { customer, appEvents } = require("./api");
const HandleErrors = require("./utils/error-handler");

module.exports = async (app, channel) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());
  //   app.use(express.static(__dirname + "/public"));

  // loggger;
  app.use((req, res, next) => {
    console.clear();
    console.log(`**** Service Customers [ New request: ${req.path} ] ****`);

    console.log(`**** CORS configuration ****`);
    res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust the origin accordingly
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
  });

  // Listen to events
  // appEvents(app);

  //api
  customer(app, channel);

  // error handling
  app.use(HandleErrors);
};
