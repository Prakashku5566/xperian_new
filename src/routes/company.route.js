import express from "express";
const comrouter = express.Router();
import {
  createCompany,
  getCompanyByquery,
  updateCompany,
  DeleteCompany,
} from "../controllers/company.controller.js";
// const midAuth = require ("../middleware/auth")
import { authentication, authorisation } from "../middleware/auth.js";

comrouter.post("/api/company", authentication, createCompany);

comrouter.get("/api/getCompany", getCompanyByquery);

comrouter.put("/api/updateCompany/:companyId", authentication, updateCompany);

comrouter.delete(
  "/api/deletecompany/:companyId",
  authentication,
  DeleteCompany
);

export default comrouter;
