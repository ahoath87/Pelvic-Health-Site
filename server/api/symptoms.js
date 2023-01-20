const express = require("express");
const symptomsRouter = express.Router();
const { getAllSymptoms } = require("../db");

symptomsRouter.use((req, res, next) => {
  console.log("A request is being made to /symptoms");

  next(); // THIS IS DIFFERENT
});

symptomsRouter.get("/", async (req, res) => {
  const symptoms = await getAllSymptoms();
  res.send({
    symptoms,
  });
});

module.exports = symptomsRouter;
