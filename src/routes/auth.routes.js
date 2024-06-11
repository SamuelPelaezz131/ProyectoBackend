import { Router } from "express";
import { test } from "../controllers/auth.controllers.js";

const router = Router();

router.get('/Home',test);

export default router;