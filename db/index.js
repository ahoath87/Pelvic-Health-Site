const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/self-led-project01-dev");
const { diagnosis, symptomsAndSigns, diagnosisSymptoms } = require("./data");

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

async function getAllUsers() {
  const { rows } = await client.query(`
 SELECT id, username, name, active FROM users;
 `);
  return rows;
}

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
    console.log(newDiagnosis);
    return newDiagnosis;
  } catch (error) {
    console.error(error);
  }
};

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
    console.log(newSymptom);
    return newSymptom;
  } catch (error) {
    console.error(error);
  }
};

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
    console.log(newDxSymptom);
    return newDxSymptom;
  } catch (error) {
    console.error(error);
  }
};

const getAllDiagnosisSymptoms = async () => {
  try {
    const { rows: dxsymptoms } = await client.query(`
    SELECT * FROM diagnosisSymptoms;
    `);
    return dxsymptoms;
  } catch (error) {
    console.error(error);
  }
};

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
};
