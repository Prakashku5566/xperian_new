import express from "express";
const hrrouter = express.Router();
import {
  createHr,
  login,
  getHrByquery,
  updateHr,
  DeleteHr,
} from "../controllers/hrController.js";
// const midAuth = require ("../middleware/auth")
import { authentication, authorisation } from "../middleware/auth.js";

// hrrouter.post("/api/hr/:userId", authentication, authorisation, createHr);
hrrouter.post("/api/hr/:userId", createHr);
0;

//  Login Api ------------------------------------------------
hrrouter.post("/api/loginhr", login);

hrrouter.get("/api/getHr", authentication, getHrByquery);

hrrouter.put("/api/updateHr/:hrId", authentication, updateHr);

hrrouter.delete("/api/deleteHr/:hrId", authentication, DeleteHr);

export default hrrouter;
