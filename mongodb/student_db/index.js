import express from 'express';
import cors from 'cors';
import connectDB from './db.js';  // Now this works, since db.js is an ES module
import userModel from './models/userModel.js'; // Also make sure to add .js extension

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/api/student', async (req, res) => {
  try {
    const userdata = await userModel.find();
    res.json(userdata);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/student_post', async (req, res) => {
  const { name, email, password, phone, image } = req.body;
  try {
    const userData = await userModel.create({ name, email, password, phone, image });
    res.status(201).json(userData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/student_update/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const updateData = await UserModel.findByIdAndUpdate(id, body, { new: true });
      res.json(updateData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
app.delete('/api/student_delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await userModel.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
