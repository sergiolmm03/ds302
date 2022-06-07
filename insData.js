const { pool } = require("./db");

async function insertData() {
  const [name, color] = process.argv.slice(2);
  console.log(name, color);
  try {
    const res = await pool.query(
      "INSERT INTO Users (FirstName,LastName) VALUES ($1, $2)",
      [name, color]
    );
    console.log(`Added a user with the name ${name}`);
  } catch (error) {
    console.error(error)
  }
}

insertData()