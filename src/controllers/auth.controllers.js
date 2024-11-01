import dotenv from 'dotenv';
import bcrypt from "bcryptjs";
import User from '../models/user.model.js';
import Animal from '../models/animal.model.js';

dotenv.config();

export const Register = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).send('Username, email, password, and role are required');
  }

  if (!['admin', 'usuario'].includes(role)) {
    return res.status(400).send('Invalid role');
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ username, email, password: hashedPassword, role });
    await user.save();

    res.status(201).send('User registered successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Incluye los datos del usuario en la respuesta
    res.json({
      message: 'Logged in successfully',
      user: {
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const AñadirAnimal = async (req, res) => {
  const { nombre, especie, raza, color, edad } = req.body;

  if (!nombre || !especie || !raza || !color || !edad) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const nuevoAnimal = new Animal({ nombre, especie, raza, color, edad });
    await nuevoAnimal.save();
    res.status(201).json({ message: 'Animal agregado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}

export const getAnimals = async (req, res) => {
  try {
    const animales = await Animal.find();
    res.status(200).json(animales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}