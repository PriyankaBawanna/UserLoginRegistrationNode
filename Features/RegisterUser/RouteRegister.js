import express from "express";

import { AddUser } from "./Controller.js";

const router = express.Router();

router.post("/AddUser", AddUser);

export default router;
