const mysql = require("mysql2");

// Connect to Database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Iloveyou!!2828",
    database: "election",
  },
  console.log("Connected to the election database")
);

module.exports = db;