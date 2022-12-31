// api/index.js
const express = require("express");
const apiRouter = express.Router();

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const diagnosisRouter = require("./diagnosis");
apiRouter.use("/diagnosis", diagnosisRouter);

const symptomsRouter = require("./symptoms");
apiRouter.use("/symptoms", symptomsRouter);

module.exports = apiRouter;
