const express = require("express");
const app = express();
const PORT = 4000;

// Route 1: Get user details as a JSON object
app.get("/get_user_details", (req, res) => {
  const userDetails = { id: 10, name: "Mike", age: 30 };
  res.json(userDetails); // Send JSON response
});

// Route 2: Read all products and send them as an array
app.get("/read_all_products", (req, res) => {
  const products = ["Pen", "CD", "Book"];
  res.json(products); // Send array as JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
