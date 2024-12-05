const mysql = require("mysql");

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "MyDB" // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database!");

  // SQL query to create the Customer table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Customer (
      custid INT AUTO_INCREMENT PRIMARY KEY,
      fname VARCHAR(50) NOT NULL,
      lname VARCHAR(50) NOT NULL,
      income DECIMAL(10, 2)
    )
  `;

  db.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Customer table created successfully!");
    db.end(); // Close the connection
  });
});
