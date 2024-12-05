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

// Temporary storage for form data
let formData = [];

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

    // Save data in temporary storage
    formData.push({ name, phone, city, state });

    // Store in MySQL for persistence
    const query = "INSERT INTO User (name, phone, city, state) VALUES (?, ?, ?, ?)";
    db.query(query, [name, phone, city, state], (err, result) => {
        if (err) throw err;

        res.send(`
            <h1>Data submitted successfully!</h1>
            <p><a href="/display">View All Data</a></p>
            <p><a href="/">Go Back</a></p>
        `);
    });
});

// Display Temporarily Stored Data
app.get("/display", (req, res) => {
    let html = "<h1>Submitted Form Data</h1><ul>";
    formData.forEach((data, index) => {
        html += `<li>${index + 1}. ${data.name} (${data.phone}, ${data.city}, ${data.state})</li>`;
    });
    html += "</ul><p><a href='/'>Go Back</a></p>";

    res.send(html);
});

// Start the Server
app.listen(3001, () => {
    console.log("Server running at http://localhost:3001/");
});
