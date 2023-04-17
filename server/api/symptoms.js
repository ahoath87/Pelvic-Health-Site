const express = require('express');
const symptomsRouter = express.Router();
const {
  getAllSymptoms,
  getDiagnosisBySymptomId,
  getSymptomDescBySympId,
} = require('../db');

symptomsRouter.use((req, res, next) => {
  console.log('A request is being made to /symptoms');

  next(); // THIS IS DIFFERENT
});

symptomsRouter.get('/', async (req, res, next) => {
  try {
    const symptoms = await getAllSymptoms();
    res.send(symptoms);
  } catch (error) {
    next(error);
  }
});

symptomsRouter.get('/:symptomId/description', async (req, res, next) => {
  let id = req.params.symptomId;
  try {
    const symptomDescription = await getSymptomDescBySympId(id);
    console.log('this is symptdesc in api call router', symptomDescription);
    res.send(symptomDescription);
  } catch (error) {
    next(error);
  }
});

symptomsRouter.get('/:symptomId', async (req, res, next) => {
  let id = req.params.symptomId;
  try {
    const diagnosisId = await getDiagnosisBySymptomId(id);
    console.log(diagnosisId);
    res.send(diagnosisId);
  } catch (error) {
    next(error);
  }
});
module.exports = symptomsRouter;
