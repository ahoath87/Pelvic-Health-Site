const {
  client,
  getAllUsers,
  createUser,
  createDiagnosis,
  createSymptoms,
  createDiagnosisSymptoms,
  getAllDiagnosis,
  getAllSymptoms,
  getAllDiagnosisSymptoms,
  getDiagnosisById,
  getSymptomById,
  getDiagnosisBySymptomId,
} = require("./index");
const { diagnosis, symptomsAndSigns, diagnosisSymptoms } = require("./data");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS diagnosisSymptoms;
        DROP TABLE IF EXISTS diagnosis;
        DROP TABLE IF EXISTS symptomsAndSigns;
        
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar(255) UNIQUE NOT NULL,
          password varchar(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          active BOOLEAN DEFAULT true
        );
      `);
    await client.query(`
      CREATE TABLE diagnosis ( 
        id SERIAL PRIMARY KEY, 
        name VARCHAR(255) NOT NULL, 
        phase VARCHAR(255) NOT NULL 
        );
      `);
    await client.query(`
      CREATE TABLE symptomsAndSigns ( 
        id SERIAL PRIMARY KEY, 
        description TEXT NOT NULL 
       );
      `);
    await client.query(`
      CREATE TABLE diagnosisSymptoms ( 
        id SERIAL PRIMARY KEY, 
        "diagnosisId" INTEGER REFERENCES diagnosis(id),
        "symptomsAndSignsId" INTEGER REFERENCES symptomsAndSigns(id),
        UNIQUE ("diagnosisId", "symptomsAndSignsId")
       );
      `);

    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    await createUser({
      username: "ashley",
      password: "ahoath87!",
      name: "ashley",
    });
    await createUser({
      username: "sandra",
      password: "2sandy4me",
      name: "sandy",
    });
    await createUser({
      username: "glamgal",
      password: "soglam",
      name: "betsy",
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialUsers();
    await Promise.all(diagnosis.map(createDiagnosis));
    await Promise.all(symptomsAndSigns.map(createSymptoms));
    await Promise.all(diagnosisSymptoms.map(createDiagnosisSymptoms));
    // await Promise.all(diagnosisSymptoms.map(getDiagnosisBySymptomId));
    await getAllDiagnosis();
    await getAllSymptoms();
    await getAllDiagnosisSymptoms();
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    console.log("Starting to test database...");

    const users = await getAllUsers();
    console.log("getAllUsers:", users);

    const diagnosis = await getAllDiagnosis();
    console.log("getAllDiagnosis", diagnosis);

    const symptoms = await getAllSymptoms();
    console.log("getAllSymptoms", symptoms);

    const dxsymptoms = await getAllDiagnosisSymptoms();
    console.log("getAllDiagnosisSymptoms", dxsymptoms);

    const diagnosisbyId = await getDiagnosisById(1);
    console.log("getDiagnosisById", diagnosisbyId);

    const symptomsById = await getSymptomById(1);
    console.log("getsymptomsById", symptomsById);

    const dxbySymptomId = await getDiagnosisBySymptomId(7);

    // const dxbySymptomId = await Promise.all(
    //   diagnosisSymptoms.map(getDiagnosisBySymptomId(7))
    // );
    console.log("getdxBysymtpomId", dxbySymptomId);

    console.log("Finished database tests!");
  } catch (error) {
    console.error("Error testing database!");
    throw error;
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
