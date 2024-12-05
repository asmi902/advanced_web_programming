import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database is connected successfully.")
    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`)
    });
}).catch((error)=>console.log(error));


app.use(express.json()); // Middleware for parsing JSON

// Schema Definition
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    image: String,
});

// Model Creation
const UserModel = mongoose.model("comps", userSchema);

// Route to Fetch All Users
app.get("/getUsers", async (req, res) => {
    try {
        const userData = await UserModel.find(); // Fetch all users
        res.json(userData); // Return user data as JSON
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

// Route to Add a New User
app.post("/addUser", async (req, res) => {
    const { name, email, password, phone, image } = req.body;
    try {
        const newUser = new UserModel({ name, email, password, phone, image });
        await newUser.save(); // Save user to database
        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error });
    }
});
