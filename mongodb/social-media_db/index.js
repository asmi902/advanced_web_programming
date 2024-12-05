import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// MongoDB connection
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/socials";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected".green))
    .catch((err) => console.error(`MongoDB connection error: ${err}`.red));

// Define Schema and Model for the 'users' collection
const userSchema = new mongoose.Schema({
    subject: String,
    theme: String,
    likes: Number,
    tweets: [String],
    date: { type: Date, default: Date.now },
});

const User = mongoose.model("users", userSchema);

// Display All Documents
app.get("/display", async (req, res) => {
    const results = await User.find();
    res.json(results);
});

// Filter by Theme
app.get("/filter/:theme", async (req, res) => {
    const { theme } = req.params;
    const results = await User.find({ theme });
    res.json(results);
});

// Delete Documents with Likes < 2
// DELETE endpoint to remove documents with likes < 2
// Delete Documents with Likes < 2
app.delete('/delete/low-likes', async (req, res) => {
    try {
        // Find and delete documents with likes < 2
        const result = await User.deleteMany({ likes: { $lt: 2 } });

        // Check the number of documents deleted and respond
        if (result.deletedCount > 0) {
            res.status(200).json({ message: `Deleted ${result.deletedCount} documents.` });
        } else {
            res.status(404).json({ message: "No documents found with likes < 2." });
        }
    } catch (err) {
        console.error('Error deleting documents:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const docsToDelete = await User.find({ likes: { $lt: 2 } });
console.log("Documents to delete:", docsToDelete);


// Start the Server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.cyan));
