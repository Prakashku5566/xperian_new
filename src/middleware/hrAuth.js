// import hrModel from "../models/hrModel";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export let decodedtoken = ""

const hrauthentication = function (req, res, next) {
    try {
       let token = req.headers["x-api-key"]
    
       if (!token) {

          return res.status(403).send({ status: false, msg: "token must be present" })
       }
       jwt.verify(token,"XPERION HR", function (error, decoded) {
    
          if (error) return res.status(400).send("this token is invalid")
          else {
             decodedtoken = decoded
             next()
          }
       })
    } catch (err) {

       return res.status(500).send({ status:false, msg: err.mssage })
    }
 }
 
 const hrauthorisation = async (req,res,next)=>{
    try {
 const idFromToken =decodedtoken.id

 let hrId = req.params.hrId
 if(hrId){
    if (!mongoose.Types.ObjectId.isValid(hrId)) {
       return res.status(400).send({ status: false, msg: "Please Enter Valid hr Id" })
   }
 let hrdata = await hrModel.findById(hrId)
 if(!hrdata)return res.status(404).send({status:false,msg:"No hrdata found"})
 let updatehr = hrdata._id.toString()
 if(idFromToken !==updatehr)
 
 {
    return res.status(403).send({ status: false, msg: "Unauthorized Access!!!...you are not authorised" });
         }else{
             next()
         }
 }
       } catch (err) {
          return res.status(500).send({ status: false, error: err.message });
      }
 }
 
 
 export {hrauthentication,hrauthorisation}