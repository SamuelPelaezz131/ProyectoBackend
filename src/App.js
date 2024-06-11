import morgan from 'morgan';
import express from 'express';
import testRouter from './routes/auth.routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

app.use(express.json());

app.use(bodyParser.json());



app.use(testRouter)

export default app;

