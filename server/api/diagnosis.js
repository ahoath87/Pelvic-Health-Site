const express = require('express');
const { getAllDiagnosis } = require('../db');
const diagnosisRouter = express.Router();

diagnosisRouter.use((req, res, next) => {
  console.log('A request is being made to /diagnosis');

  next();
});

diagnosisRouter.get('/', async (req, res) => {
  const diagnosis = await getAllDiagnosis();
  res.send({
    diagnosis,
  });
});

module.exports = diagnosisRouter;
