require("dotenv").config();
const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const StartServer = async () => {
  const app = express();
  console.clear();

  app.use(cors());
  app.use(express.json());

  // logger
  app.use((req, res, next) => {
    // console.clear();
    console.log(`**** Gateway rest  service[ New request: ${req.path} ] ****`);
    next();
  });

  app.use("/customer", proxy("http://localhost:8001/"));
  app.use("/shopping", proxy("http://localhost:8003/"));
  app.use("/", proxy("http://localhost:8002/"));

  //
  app
    .listen(8000, () => {
      console.log(`gateway service : listening to port ${8000}`);
    })
    .on("error", (err) => {
      console.log(err);
    });
};

StartServer();
