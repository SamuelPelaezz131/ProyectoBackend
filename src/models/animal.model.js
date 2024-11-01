import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  especie: { type: String, required: true },
  raza: { type: String, required: true },
  color: { type: String, required: true },
  edad: { type: Number, required: true },
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
