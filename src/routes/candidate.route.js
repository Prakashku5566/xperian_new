import express from "express";
const candidateRouter = express.Router();
import {
  createCandidate,
  getCandidateByquery,
  updateCandidate,
  DeleteCandidate,
} from "../controllers/candidate.controller.js";
import { hrauthentication, hrauthorisation } from "../middleware/hrAuth.js";
import { authentication, authorisation } from "../middleware/auth.js";

candidateRouter.post("/api/candidate", hrauthentication, createCandidate);

candidateRouter.get("/api/getcandidate", hrauthentication, getCandidateByquery);

candidateRouter.put("/api/updatecandidate/:candidateId", updateCandidate);

candidateRouter.delete(
  "/api/deletecandidate/:candidateId",
  authentication,
  DeleteCandidate
);

export default candidateRouter;
