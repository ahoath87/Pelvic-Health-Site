const client = require("./client");

const { diagnosis, symptomsAndSigns, diagnosisSymptoms } = require("./data");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// ************* users start here ************

// inserts a user
async function createUser({ username, password, name }) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const { rows } = await client.query(
      `INSERT INTO users(username, password, name) 
        VALUES($1, $2, $3) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `,
      [username, hashedPassword, name]
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

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
    SELECT id, password, username, name FROM users Where id = ${userId};
    `);
    delete user.password;
    if (user.length === 0) {
      return null;
    }
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function getUserByUsername(username) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * FROM users
    WHERE username = $1;`,
      [username]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
};
