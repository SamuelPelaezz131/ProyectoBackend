import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './conection.js';
import login from './routes/auth.routes.login.js';
import register from "./routes/auth.routes.register.js"
import Animal from './routes/animal.routes.add.js';
import Animalget from './routes/animal.get.routes.js';
const app = express();

app.use(morgan('dev'));

const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza esto con el origen de tu frontend
    credentials: true, // Esto permite que las cookies se incluyan en las solicitudes
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());

app.use("/api", register)
app.use("/api", login)
app.use("/api", Animal)
app.use("/api", Animalget)

connectDB()

export default app;

