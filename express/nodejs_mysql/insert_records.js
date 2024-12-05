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

  // SQL query to insert records into the Customer table
  const insertQuery = `
    INSERT INTO Customer (fname, lname, income)
    VALUES 
      ('John', 'Doe', 45000),
      ('Jane', 'Smith', 55000),
      ('Alice', 'Johnson', 67000),
      ('Bob', 'Williams', 38000),
      ('Charlie', 'Brown', 72000)
  `;

  db.query(insertQuery, (err, result) => {
    if (err) throw err;
    console.log("5 records inserted successfully into Customer table!");
    db.end(); // Close the connection
  });
});
