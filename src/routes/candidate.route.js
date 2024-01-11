import express from "express";
const candidateRouter = express.Router();
import { createCandidate, getCandidateByquery, updateCandidate, getAllCandidates } from "../controllers/candidate.controller.js";
import { hrauthentication, hrauthorisation } from "../middleware/hrAuth.js";
import { authentication, authorisation } from "../middleware/auth.js";

candidateRouter.post("/api/candidate", createCandidate)

candidateRouter.get("/api/getcandidate", getCandidateByquery);

candidateRouter.get("/api/getAllcandidates", getAllCandidates);

candidateRouter.put("/api/updatecandidate/:candidateId", updateCandidate);

// candidateRouter.delete("/api/deletecandidate/:candidateId", authentication, DeleteCandidate)





export default candidateRouter;