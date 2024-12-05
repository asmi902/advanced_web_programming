const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const hotelId = req.body.hotelId;
    const hotelName = req.body.hotelName;
    const rating1 = parseFloat(req.body.rating1);
    const rating2 = parseFloat(req.body.rating2);
    const rating3 = parseFloat(req.body.rating3);

    // Calculate the mean rating score
    const ratingScore = (rating1 + rating2 + rating3) / 3;

    // Determine the rating rank
    let ratingRank;
    if (ratingScore <= 2) {
        ratingRank = "Low Quality";
    } else if (ratingScore > 2 && ratingScore <= 4) {
        ratingRank = "Medium Quality";
    } else if (ratingScore > 4) {
        ratingRank = "High Quality";
    }

    // Render the result page
    res.render('result', {
        hotelId, hotelName,rating1, rating2,
        rating3,
        ratingScore,
        ratingRank
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
