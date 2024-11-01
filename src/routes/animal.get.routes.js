import { getAnimals } from "../controllers/auth.controllers.js";
import express from "express"

const router = express.Router();

router.get("/getAnimal", getAnimals);


export default router;

