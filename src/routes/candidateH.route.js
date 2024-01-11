import  express  from "express";
const candidateHistoryRouter = express.Router();
import {createHistoryCandidate} from "../controllers/candidateHistory.controller.js";
import {hrauthentication,hrauthorisation} from "../middleware/hrAuth.js";
// import { authentication,authorisation } from "../middleware/auth.js";


//==================================Candidate History List===========================================//

candidateHistoryRouter.post("/api/candidateHistory",createHistoryCandidate)






export default candidateHistoryRouter;