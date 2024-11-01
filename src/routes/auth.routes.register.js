import { Router } from "express";
import { Register } from "../controllers/auth.controllers.js";
import express from "express"

const router = express.Router();

router.post('/register', Register);

export default router;