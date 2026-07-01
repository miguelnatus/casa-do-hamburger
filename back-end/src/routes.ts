import { Router } from "express";
import { login } from "./controller/user-controller.js";
import { register } from "./controller/user-controller.js";

export const router = Router();

router.post("/login", login);

router.post("/register", register);
