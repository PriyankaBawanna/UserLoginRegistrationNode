import express from "express";
import { LogginUser } from "./ControllerLogin.js";
const router = express.Router();

router.post("/LogginUser", LogginUser);
export default router;
