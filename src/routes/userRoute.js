import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login
router.post("/login", userController.login);
// API OrderPinned
router.get("/Top-Car", userController.orderPinned)

//API -   Edit
router.put("/", userController.editUser);

export default router;
