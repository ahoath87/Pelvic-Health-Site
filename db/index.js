const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/self-led-project01-dev");
const { diagnosis, symptomsAndSigns, diagnosisSymptoms } = require("./data");

// ************* users start here ************

// inserts a user
async function createUser({ username, password, name }) {
  try {
    const { rows } = await client.query(
      `INSERT INTO users(username, password, name) 
        VALUES($1, $2, $3) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `,
      [username, password, name]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

//retrieves all users
async function getAllUsers() {
  const { rows } = await client.query(`
 SELECT id, username, name, active FROM users;
 `);
  return rows;
}

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
const getSymptomById = async (symptomAndSignsId) => {
  try {
    const {
      rows: [symptom],
    } = await client.query(`
    SELECT * FROM symptomsAndSigns WHERE id = ${symptomAndSignsId};
    `);
    console.log(symptom);
    return symptom;
  } catch (error) {
    console.error("error in getSypmtomsById", error);
  }
};

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
    console.error("error in getDiagnoisisById", error);
  }
};

async function getDiagnosisBySymptomId(symptomsAndSignsId) {
  try {
    const {
      rows: [diagnosisIds],
    } = await client.query(
      `
  SELECT ("diagnosisId") FROM diagnosisSymptoms
  WHERE "symptomsAndSignsId" = $1 ;
  `,
      [symptomsAndSignsId]
    );
    // const diagnosis = await Promise.all(
    //   diagnosisIds.map((diagnosis) => getDiagnosisById(diagnosis.id))
    // );
    return diagnosisIds;
  } catch (error) {
    console.error("error getting diagnosis", error);
  }
}

module.exports = {
  client,
  createUser,
  getAllUsers,
  createDiagnosis,
  createSymptoms,
  createDiagnosisSymptoms,
  getAllDiagnosis,
  getAllSymptoms,
  getAllDiagnosisSymptoms,
  getDiagnosisById,
  getSymptomById,
  getDiagnosisBySymptomId,
};
