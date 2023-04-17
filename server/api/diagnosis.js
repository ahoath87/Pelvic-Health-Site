const express = require('express');
const {
  getAllDiagnosis,
  getDiagnosisIdsBySymptomId,
  getDiagnosisInfoBySymptomId,
  attachSymptomsToDiagnosis,
  attachSymptomsToDiagnosisSymps,
} = require('../db');
const diagnosisRouter = express.Router();

diagnosisRouter.use((req, res, next) => {
  console.log('A request is being made to /diagnosis');

  next();
});

diagnosisRouter.get('/', async (req, res) => {
  try {
    const diagnosis = await getAllDiagnosis();
    res.send({
      diagnosis,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

diagnosisRouter.get('/:symptomId/diagnosis', async (req, res, next) => {
  let id = req.params.symptomId;
  console.log('this is req.params', id);
  try {
    const diagIds = await getDiagnosisInfoBySymptomId(id);
    console.log('THIS IS DIAGIDS', diagIds);
    //  let attachedDiags= attachSymptomsToDiagnosisSymps(diagIds);
    res.send({
      diagIds,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = diagnosisRouter;
