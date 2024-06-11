import express from 'express';
import mongoose, { connection } from 'mongoose';

const app = express();

const DB_URL = 'mongodb+srv://samuelpelaez:43829244@cluster0.0jr3nt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
export default conection;