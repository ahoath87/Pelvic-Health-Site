const client = require('./client');
const { attachSymptomsToDiagnosisSymps } = require('./diagnosisSymptoms');

// ************* diagnosis starts here ************

//inserts a diagnosis
const createDiagnosis = async (diagnosis) => {
  try {
    const { name, phase } = diagnosis;
    const {
      rows: [newDiagnosis],
    } = await client.query(
      ` INSERT INTO diagnosis(name, phase)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, phase]
    );
    // console.log(newDiagnosis);
    return newDiagnosis;
  } catch (error) {
    console.error(error);
  }
};

// gets all diagnosis
const getAllDiagnosis = async () => {
  try {
    const { rows: diagnosis } = await client.query(`
      SELECT * FROM diagnosis;
      `);
    return diagnosis;
  } catch (error) {
    console.error(error);
  }
};

// gets a diagnosis by its Id
const getDiagnosisById = async (diagnosisId) => {
  try {
    const {
      rows: [diagnosis],
    } = await client.query(`
      SELECT * FROM diagnosis WHERE id = ${diagnosisId};
      `);
    console.log(diagnosis);
    return diagnosis;
  } catch (error) {
    console.error('error in getDiagnoisisById', error);
  }
};

//get a diagnosis by its symptoms and sign Id
async function getDiagnosisNameBySymptomId(symptomsAndSignsId) {
  try {
    console.log('thisis symptoms and signsID', symptomsAndSignsId);
    const { rows: diagnosisList } = await client.query(
      `
    SELECT diagnosis.* 
    FROM diagnosis
    JOIN diagnosisSymptoms ON diagnosis.id = diagnosisSymptoms."diagnosisId"
    WHERE diagnosisSymptoms."symptomsAndSignsId" = $1
        ;`,
      [symptomsAndSignsId]
    );
    return diagnosisList;
  } catch (error) {
    console.error('error getting diagnosis', error);
  }
}

async function getAllSymptomsByDiagnosisId(id) {
  try {
    console.log('this is ID in getALldaignosisbysymptomsId', id);
    const { rows: diagSymps } = await client.query(
      `
    SELECT diagnosisSymptoms.*
    FROM diagnosisSymptoms
    WHERE diagnosisSymptoms."diagnosisId" = $1
    `,
      [id]
    );
    console.log('this is DIAGSYMPTS', diagSymps);
    const attachedDiagSymp = attachSymptomsToDiagnosisSymps(diagSymps);

    return attachedDiagSymp;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createDiagnosis,
  getDiagnosisById,
  getAllDiagnosis,
  getDiagnosisNameBySymptomId,
  getAllSymptomsByDiagnosisId,
};
