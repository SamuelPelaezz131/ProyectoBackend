import { AñadirAnimal } from "../controllers/auth.controllers.js";
import express from "express"

const router = express.Router();

router.post("/addAnimal", AñadirAnimal);


export default router;

