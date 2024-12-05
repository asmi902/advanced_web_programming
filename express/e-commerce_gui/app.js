const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h1>E-Commerce Product Rating</h1>
        <form action="/submit" method="POST">
            <label>Product ID:</label>
            <input type="text" name="productId" required><br>
            <label>Product Name:</label>
            <input type="text" name="productName" required><br>
            <label>Product Rating-1:</label>
            <input type="number" name="rating1" min="10" max="50" required><br>
            <label>Product Rating-2:</label>
            <input type="number" name="rating2" min="10" max="50" required><br>
            <label>Product Rating-3:</label>
            <input type="number" name="rating3" min="10" max="50" required><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    const { productId, productName, rating1, rating2, rating3 } = req.body;
    const ratings = [parseFloat(rating1), parseFloat(rating2), parseFloat(rating3)];
    const ratingScore = ratings.reduce((a, b) => a + b, 0) / ratings.length;

    let ratingRank = '';
    if (ratingScore <= 20) ratingRank = 'Low Quality';
    else if (ratingScore > 20 && ratingScore <= 40) ratingRank = 'Medium Quality';
    else ratingRank = 'High Quality';

    res.send(`
        <h1>Product Rating Details</h1>
        <p><b>Product ID:</b> ${productId}</p>
        <p><b>Product Name:</b> ${productName}</p>
        <p><b>Rating Score:</b> ${ratingScore.toFixed(2)}</p>
        <p><b>Rating Rank:</b> ${ratingRank}</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(4001, () => {
    console.log('Server running at http://localhost:4001/');
});
