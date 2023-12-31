
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import {isValidTitle, isvalidEmail, isvalidName, isvalidPhone,isvalidPassword} from "../validator/validator.js"
//==============================createUser=====================================//

const createUser = async (req, res) => {
  try {
    let { fname,lname, phone, email, password, designation } = req.body;

    if (Object.keys(req.body).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "for registration user data is required" });
    }
    if (!fname) {
      return res.status(400).send({ status: false, msg: "Enter your first Name" });
    }
    if (isvalidName(fname)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid first Name" });
    }
    if (!lname) {
      return res.status(400).send({ status: false, msg: "Enter your last Name" });
    }
    if (isvalidName(lname)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid last Name" });
    }
    if (!phone) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    }
    if (isvalidPhone(phone)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    let existphone = await userModel.findOne({ phone: phone });
    if (existphone) {
      return res.status(400).send({
        status: false,
        msg: "User with this phone number is already registered.",
      });
    }
    if (!email) {
      return res.status(400).send({
        status: false,
        msg: "Enter your email .Its mandatory for registration!!!",
      });
    }
    if (!designation) {
      return res.status(400).send({
        status: false,
        msg: "Enter your designation .Its mandatory for registration!!!",
      });
    } 
    if (isvalidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Email" });
    }
        if (!isValidTitle(designation)) {
          return res.status(400).send({
            status: false,
            message: "designation should be among Director,Manager",
          });
        }

    let existEmail = await userModel.findOne({ email: email });
    if (existEmail) {
      return res.status(400).send({
        status: false,
        msg: "User with this email is already registered",
      });
    }
    if (!password) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter Password for registartion" });
    }

    if (isvalidPassword(password)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid Password and it's length should be 8-15",
      });
    }

    let savedData = await userModel.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

//==========================================UserLOgin========================//

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(400)
        .send({ status: false, msg: "Email is mandatory for logging In" });
    }

    if (!password) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter password. It is Mandatory" });
    }
    let data = await userModel.findOne({ email: email, password: password });

    if (!data) {
      return res.status(400).send({
        status: false,
        msg: "Email or Password is incorrect.Please recheck it",
      });
    }
    //    console.log(data)
    let token = await jwt.sign(
      { id: data._id.toString() },
      "XPERION REQRUIMENT SERVICE",
      { expiresIn: "24hr" }
    );
    res.header({ "x-api-key": token });
    return res
      .status(200)
      .send({ status: true, message: "Login Successful", data: token });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

export {createUser,login}
