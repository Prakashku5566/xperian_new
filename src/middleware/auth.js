import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export let decodedtoken = ""

const authentication = function (req, res, next) {
    try {
       let token = req.headers["x-api-key"]
    
       if (!token) {

          return res.status(403).send({ status: false, msg: "token must be present" })
       }
       jwt.verify(token,"XPERION REQRUIMENT SERVICE", function (error, decoded) {
    
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
 
 const authorisation = async (req,res,next)=>{
    console.log("30")
    try {
 const idFromToken =decodedtoken.id

//  let userId = req.params.userId
//  if(userId){
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//        return res.status(400).send({ status: false, msg: "Please Enter Valid user Id " })
//    }
 let userdata = await userModel.findById(idFromToken)
 if(!userdata)return res.status(404).send({status:false,msg:"No user found"})
//  let updateuser = userdata._id.toString()
//  if(idFromToken !==updateuser)
 
//  {
//     return res.status(403).send({ status: false, msg: "Unauthorized Access!!!...you are not authorised" });
//          }else{
//              next()
//          }
//  }
next()
       } catch (err) {
          return res.status(500).send({ status: false, error: err.message });
      }
 }
 
 export {authentication,authorisation}
