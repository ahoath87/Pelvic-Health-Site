const client = require("./client");

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
    console.error("error getting diagnosis", error);
  }
};

async function getDiagnosisBySymptomId(symptomsAndSignsId) {
  try {
    console.log("thisis symptoms and signsID", symptomsAndSignsId);
    const { rows: diagnosisIdList } = await client.query(
      `
    SELECT ("diagnosisId") FROM diagnosisSymptoms
    WHERE "symptomsAndSignsId" = $1
    
        ;`,
      [symptomsAndSignsId]
    );
    return diagnosisIdList;
  } catch (error) {
    console.error("error getting diagnosis", error);
  }
}

module.exports = {
  createDiagnosisSymptoms,
  getAllDiagnosisSymptoms,
  getDiagnosisBySymptomId,
};
