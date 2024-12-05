const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change if you have a different username
    password: "", // Change if you have a password
    database: "userdb"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
});

// Serve Static HTML Form
app.get("/", (req, res) => {
    res.send(`
        <form action="/submit" method="post">
            <label>Name:</label>
            <input type="text" name="name" required><br>
            <label>Phone:</label>
            <input type="text" name="phone" required><br>
            <label>City:</label>
            <input type="text" name="city" required><br>
            <label>State:</label>
            <input type="text" name="state" required><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle Form Submission
app.post("/submit", (req, res) => {
    const { name, phone, city, state } = req.body;

    const query = "INSERT INTO User (name, phone, city, state) VALUES (?, ?, ?, ?)";
    db.query(query, [name, phone, city, state], (err, result) => {
        if (err) throw err;

        res.send("Data saved successfully! <a href='/users'>View Users</a>");
    });
});

// Display Saved Users
app.get("/users", (req, res) => {
    db.query("SELECT * FROM User", (err, results) => {
        if (err) throw err;

        let html = "<h1>Users List</h1><ul>";
        results.forEach(user => {
            html += `<li>${user.name} (${user.phone}, ${user.city}, ${user.state})</li>`;
        });
        html += "</ul><a href='/'>Go Back</a>";

        res.send(html);
    });
});

// Start the Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
