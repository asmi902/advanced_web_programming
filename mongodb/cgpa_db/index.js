import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

const app = express();
app.use(express.json());

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/college";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected".green))
    .catch(err => console.error(`MongoDB connection error: ${err}`.red));

const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    scores: [
        {
            course: String,
            marks: Number,
        }
    ],
    age: Number
});
const Student = mongoose.model("Student", studentSchema);

app.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { newName } = req.body;

        const docToUpdate = await Student.findOne({ id });

        if (!docToUpdate) {
            console.log("Student not found."); // Log this for feedback
            return res.status(404).json({ message: "Student not found." });
        }

        console.log("Document before update:", docToUpdate);

        const result = await Student.updateOne({ id }, { $set: { name: newName } });

        console.log(`Updated ${result.modifiedCount} record(s).`);

        res.json({ message: `Updated ${result.modifiedCount} record(s).` });
    } catch (err) {
        console.error('Error updating document:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`College server running on port ${PORT}`.cyan));
