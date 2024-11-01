import mongoose from "mongoose"


export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://samuelpelaeztorres:venus1223@cluster0.wmficjl.mongodb.net/");
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); 
  }
};