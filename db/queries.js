const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  return rows;
}

async function insertMessage(author, text) {
  await pool.query("INSERT INTO messages (author, text) VALUES ($1, $2)", [
    author,
    text,
  ]);
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
