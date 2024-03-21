const express = require("express");
const cors = require("cors");
const { PORT } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");
const { CreateChannel } = require("./utils");
require("dotenv").config();

const StartServer = async () => {
  const app = express();

  const corsOptions = {
    // origin: 'http://localhost:8081'
    origin: "http://localhost:3000",
  };
  // Enable all CORS requests
  app.use(cors(corsOptions));

  await databaseConnection();

  const channel = await CreateChannel();

  await expressApp(app, channel);

  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
