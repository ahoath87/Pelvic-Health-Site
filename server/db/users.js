const client = require('./client');

const { diagnosis, symptomsAndSigns, diagnosisSymptoms } = require('./data');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// ************* users start here ************

// inserts a user
async function createUser({ username, password, name, email }) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const { rows } = await client.query(
      `INSERT INTO users(username, password, name, email) 
        VALUES($1, $2, $3, $4) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `,
      [username, hashedPassword, name, email]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

//retrieves all users
async function getAllUsers() {
  const { rows } = await client.query(`
 SELECT id, username, name, email, active FROM users;
 `);
  return rows;
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
    SELECT id, password, username, email name FROM users Where id = ${userId};
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

async function getUser({ username, password }) {
  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return;
    delete user.password;
    return user;
  } catch (error) {
    console.log('error getting user');
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getUser,
};
