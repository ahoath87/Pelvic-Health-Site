const client = require('./client');
// ************* symptoms start here ************

// inserts a symptom
const createSymptoms = async (symptomsAndSigns) => {
  try {
    const { description } = symptomsAndSigns;
    const {
      rows: [newSymptom],
    } = await client.query(
      `
      INSERT INTO symptomsAndSigns(description)
      VALUES ($1)
      RETURNING *;
      `,
      [description]
    );
    // console.log(newSymptom);
    return newSymptom;
  } catch (error) {
    console.error(error);
  }
};

//gets all symptoms
const getAllSymptoms = async () => {
  try {
    const { rows: symptoms } = await client.query(`
      SELECT * FROM symptomsAndSigns;
      `);
    return symptoms;
  } catch (error) {
    console.error(error);
  }
};

// gets a symptom by its Id
const getSymptomById = async (id) => {
  try {
    const {
      rows: [symptom],
    } = await client.query(
      `
      SELECT * FROM symptomsAndSigns WHERE id = $1
      `,
      [id]
    );
    console.log(symptom);
    return symptom;
  } catch (error) {
    console.error('error in getSypmtomsById', error);
  }
};

async function getAllSymptomsByDiagnosis(id) {
  try {
    const { rows } = await client.query(
      `
            SELECT symptomsAndSigns.*
            FROM symptomsAndSigns
            JOIN diagnosisSymptoms ON symptomsAndSigns.id = diagnosisSymptoms."symptomsAndSignsId"
            WHERE diagnosisSymptoms."diagnosisId" = $1
            `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

// async function getAllSymptomsThatShareDiagnosisId(id) {
//   try {
//     const { rows } = await client.query(
//       `
//       SELECT symptomsAndSigns.*
//       FROM symptomsAndSigns
//       JOIN diagnosisSymptoms ON symptomsAndSigns.id = diagnosisSymptoms."symptomsAndSignsId"
//       WHERE

//       `
//     );
//   } catch (error) {}
// }

// get all diagnosis by symptomandsign Id
// get all symtpoms by diagnosis ids
// get all symptoms by diagnosis id --- attach the symptoms map them and exclude the original symptom

// get symptoms by diagnosis Id

module.exports = {
  createSymptoms,
  getAllSymptoms,
  getSymptomById,
  getAllSymptomsByDiagnosis,
};
