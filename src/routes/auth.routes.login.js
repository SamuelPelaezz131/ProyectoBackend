import { Router } from "express";
import { LoginUser } from "../controllers/auth.controllers.js";
import express from "express"

const router = express.Router();

router.post("/login", LoginUser);


export default router;

