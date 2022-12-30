const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/self-led-project01-dev");

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

module.exports = {
  client,
  createUser,
  getAllUsers,
};
