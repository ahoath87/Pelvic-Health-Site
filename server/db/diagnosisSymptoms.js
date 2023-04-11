const client = require('./client');

//inserts a diagnosis symtpom
const createDiagnosisSymptoms = async (diagnosisSymptoms) => {
  try {
    const { diagnosisId, symptomsAndSignsId } = diagnosisSymptoms;
    const {
      rows: [newDxSymptom],
    } = await client.query(
      `
      INSERT INTO diagnosisSymptoms("diagnosisId", "symptomsAndSignsId")
      VALUES ($1, $2)
      RETURNING *;
      `,
      [diagnosisId, symptomsAndSignsId]
    );
    // console.log(newDxSymptom);
    return newDxSymptom;
  } catch (error) {
    console.error(error);
  }
};

//gets all diagnosis symtpoms
const getAllDiagnosisSymptoms = async () => {
  try {
    const { rows: dxsymptoms } = await client.query(`
      SELECT * FROM diagnosisSymptoms;
      `);
    return dxsymptoms;
  } catch (error) {
    console.error('error getting diagnosis', error);
  }
};

// gets the diagnosis id by diagnosis symptom id
async function getDiagnosisBySymptomId(symptomsAndSignsId) {
  try {
    console.log('thisis symptoms and signsID', symptomsAndSignsId);
    const { rows: diagnosisIdList } = await client.query(
      `
    SELECT ("diagnosisId") FROM diagnosisSymptoms
    WHERE "symptomsAndSignsId" = $1
    
        ;`,
      [symptomsAndSignsId]
    );
    return diagnosisIdList;
  } catch (error) {
    console.error('error getting diagnosis', error);
  }
}

async function attachSymptomsIdsToDiagnosis(diagnosises) {
  const diagnosisToReturn = [...diagnosises];
  console.log('these are diganosis to return', diagnosisToReturn);

  try {
    const { rows: symptoms } = await client.query(
      `
  SELECT symptomsandsigns.*
  FROM symptomsandsigns
  JOIN diagnosissymptoms ON symptomsandsigns.id = diagnosissymptoms."symptomsAndSignsId"
  WHERE diagnosisId = ANY ${diagnosises}
  
  `
    );

    for (const diagnosis of diagnosisToReturn) {
      const symptomsToAdd = symptoms.filter(
        (symptom) => symptom.id === diagnosis.symptomId
      );
      console.log('this is symptomsToADd', symptomsToAdd);
      diagnosis.symptoms = symptomsToAdd;
    }
    return symptoms;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createDiagnosisSymptoms,
  getAllDiagnosisSymptoms,
  getDiagnosisBySymptomId,
  attachSymptomsIdsToDiagnosis,
};
