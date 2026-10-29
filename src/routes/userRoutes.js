import express from "express";

import { logInUser } from "../controllers/logInUser.js";
import { registerUser } from "../controllers/registerUser.js";
import { getAllUsers } from "../controllers/getAllUsers.js";
import { validate } from "../middlewares/validate.js";
import {
  registerSchema,
  logInSchema,
} from "../schemas/auth.schema.js";

const router = express.Router();

// Register a user
router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(logInSchema), logInUser)

// Get all users
router.get("/", getAllUsers);

export default router;