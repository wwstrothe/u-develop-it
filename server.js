const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

// Connect to Database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user:'root',
    password: 'will1995',
    database: 'election'
  },
  console.log('Connected to the election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});