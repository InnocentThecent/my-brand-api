import { Router } from "express";
import passport from "passport";
import { login, register } from "../controllers/user";

const router = Router();

router.post("/signup", register);

router.post("/login", login);

export default router;
