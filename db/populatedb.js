require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, author VARCHAR(255), text TEXT, date TIMESTAMP WITH TIME ZONE DEFAULT NOW());

INSERT INTO messages (author, text)
VALUES ('Amando', 'Hi there!'), ('Charles', 'Hello World');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
