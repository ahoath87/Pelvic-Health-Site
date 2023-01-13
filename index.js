require("dotenv").config();
const PORT = 5000;
const express = require("express");
const server = express();
const apiRouter = require("./api");
const morgan = require("morgan");
const cors = require("cors");
const client = require("./db/client");
client.connect();

//********* middleware ************/
server.use(morgan("dev"));
server.use(express.json());

// ********** api router *********
server.use(cors());

server.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

server.use("/api", apiRouter);

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

server.listen(PORT, () => {
  console.log("the server is up on port", PORT);
});

module.exports = server;
