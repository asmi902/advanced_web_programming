import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/students');
  console.log('Database is Connected Successfully');
};

export default connectDB;
