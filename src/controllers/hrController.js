import hrModel from "../models/hrModel.js";
// import { createHr } from './hr.controller';
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {
  isValidprofile,
  isValidDate,
  isvalidName,
  isvalidEmail,
  isvalidPhone,
  isvalidCompanyName,
  isvalidAddress,
  isvalidProbation,
  isvalidPassword,
  isValidprofileExperience,
  isvalidboolean,
} from "../validator/validator.js";

//==============================createUser=====================================//

const createHr = async (req, res) => {
  try {
    let {
      fname,
      lname,
      //  username,
      phoneP,
      phoneB,
      email,
      Address,
      Alias,
      WfhLocation,
      doj,
      probation,
      confirmedEmployee,
      profile,
      profileExperience,
      shift,
      process,
      bdmBonus,
      bdmAddDate,
      msjTarget,
      actualMsj,
      mtjTarget,
      activeMtj,
      referredBy,
      salaryBracket,
      password,
    } = req.body;

    if (Object.keys(req.body).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "for registration user data is required" });
    }

    if (!fname) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your first Name" });
    }
    if (isvalidName(fname)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid  first Name" });
    }
    if (!lname) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your last Name" });
    }
    if (isvalidName(lname)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid last Name" });
    }

    if (!Alias) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the  username" });
    }
    if (isvalidName(Alias)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Alias" });
    }

    if (!phoneP) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    }
    if (isvalidPhone(phoneP)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    if (!phoneB) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    }
    if (isvalidPhone(phoneB)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    let existphone = await hrModel.findOne(
      { phoneP: phoneP },
      { phoneB: phoneB }
    );
    if (existphone) {
      return res.status(400).send({
        status: false,
        msg: "User with this phone number is already registered.",
      });
    }

    // if (!email) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Enter your email .Its mandatory for registration!!!",
    //   });
    // }
    if (isvalidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Email" });
    }

    let existEmail = await hrModel.findOne({ email: email });
    if (existEmail) {
      return res.status(400).send({
        status: false,
        msg: "User with this email is already registered",
      });
    }
    if (!Address) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter Address for registartion" });
    }
    if (isvalidAddress(Address)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid Address",
      });
    }
    if (!WfhLocation) {
      return res.status(400).send({
        status: false,
        msg: "Please enter WfhLocation for registartion",
      });
    }
    if (isvalidAddress(WfhLocation)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid Wfh Address",
      });
    }

    if (!doj) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter doj for registartion" });
    }
    if (isValidDate(doj)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid date of joining",
      });
    }

    if (!probation) {
      return res.status(400).send({
        status: false,
        msg: "Please enter probation for registartion",
      });
    }
    if (isvalidProbation(probation)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid probation period" });
    }

    // if (confirmedEmployee) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please enter confirmedEmployee for registartion" });
    // }
    // if ([ "Yes","No",].includes(confirmedEmployee)) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: " confirmedEmployee must be type of ['yes','no']",
    //     });
    //   }

    if (!profile) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter profile for registartion" });
    }
    if (!isValidprofile(profile)) {
      return res.status(400).send({
        status: false,
        msg: " profile type doesn't exist",
      });
    }
    if (!profileExperience) {
      return res.status(400).send({
        status: false,
        msg: "Please enter profileExperience for registartion",
      });
    }
    if (!isValidprofileExperience(profileExperience)) {
      return res.status(400).send({
        status: false,
        msg: " profileExperience must be type of ['Fresher','Experienced']",
      });
    }
    if (!shift) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter sift for registartion" });
    }
    if (!process) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter process for registartion" });
    }
    if (isvalidName(process)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid process" });
    }
    // if (!bdmBonus) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please enter bdm for registartion" });
    // }
    // if (isvalidCompanyName(bdmBonus)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please enter a valid bdmBonus" });
    // }
    // if (!bdmAddDate) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please enter bdm for registartion" });
    // }

    // if (!isValidDate(bdmAddDate)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Validation failed: Invalid date format",
    //   });
    // }
    // Define a regex pattern for a date in the format DD-MM-YYYY
    // const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
    // if (!dateRegex.test(bdmAddDate)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Validation failed: Invalid date format",
    //   });
    // }

    // if (!msjTarget) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Please enter msjTarget for registartion",
    //   });
    // }
    // if (!actualMsj) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Please enter actualMsj for registartion",
    //   });
    // }
    // if (!mtjTarget) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Please enter mtjTarget for registartion",
    //   });
    // }
    // if (!activeMtj) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Please enter activeMtj for registartion",
    //   });
    // }
    if (!referredBy) {
      return res.status(400).send({
        status: false,
        msg: "Please enter referredBy for registartion",
      });
    }
    if (isvalidName(referredBy)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid name" });
    }
    if (!salaryBracket) {
      return res.status(400).send({
        status: false,
        msg: "Please enter salaryBracket for registartion",
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

    let savedData = await hrModel.create(req.body);
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
    const { Alias, password } = req.body;
    if (!Alias) {
      return res
        .status(400)
        .send({ status: false, msg: "username is mandatory for logging In" });
    }

    if (!password) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter password. It is Mandatory" });
    }
    let data = await hrModel.findOne({
      Alias: Alias,
      password: password,
    });

    if (!data) {
      return res.status(400).send({
        status: false,
        msg: "Alias name or Password is incorrect.Please recheck it",
      });
    }
    //    console.log(data)
    let token = await jwt.sign({ id: data._id.toString() }, "XPERION HR", {
      expiresIn: "24hr",
    });
    res.header({ "x-api-key": token });
    return res
      .status(200)
      .send({ status: true, message: "Login Successful", data: token });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

//=================================getByquery============================================//

const getHrByquery = async (req, res) => {
  try {
    const filter = { isDeleted: false };

    const queryParams = req.query;
    {
      const { hrId, Alias, phone } = queryParams;
      if (hrId) {
        if (!mongoose.Types.ObjectId.isValid(hrId)) {
          return res
            .status(400)
            .send({ status: false, msg: `please enter a valid hrId` });
        }
        filter["hrId"] = hrId;
      }

      if (Alias) {
        filter["Alias"] = Alias;
      }

      if (phone) {
        filter["phone"] = phone;
      }
    }

    const hrs = await hrModel.find(filter); //.select({  hrId: 1,name:1, username: 1, phone: 1}).collation({ locale: "en" }).sort({ name: 1 })

    if (Object.keys(hrs).length == 0)
      return res
        .status(404)
        .send({ status: false, msg: "No Such Hr is found" });

    return res
      .status(200)
      .send({ status: true, message: "hr list", data: hrs });
  } catch (err) {
    // console.log(err.message)
    res.status(500).send({ status: false, Error: err.message });
  }
};

//=========================================UPDATE HR========================================================//

const updateHr = async (req, res) => {
  try {
    let hrId = req.params.hrId;
    let {
      fname,
      lname,
      username,
      phoneP,
      phoneB,
      email,
      Address,
      Alias,
      WfhLocation,
      doj,
      probation,
      confirmedEmployee,
      tenure,
      profile,
      profileExperience,
      shift,
      process,
      // bdmBonus,
      // msjTarget,
      // mtjTarget,
      // activeMtj,
      referredBy,
      salaryBracket,
      password,
    } = req.body;
    if (Object.keys(req.body).length == 0)
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Hr Details For Updating" });

    if (!hrId) {
      return res
        .status(400)
        .send({ status: false, msg: "hrId must be present" });
    }

    if (!mongoose.Types.ObjectId.isValid(hrId)) {
      return res
        .status(400)
        .send({ status: false, msg: `this  hrId is not a valid Id` });
    }
    let findhrId = await hrModel.findById(hrId);

    if (!findhrId) {
      return res
        .status(404)
        .send({ status: false, msg: "no Hr found with this hr Id" });
    }
    if (fname) {
      if (fname.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid  First name" });
      if (isvalidName(fname))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid First Name" });
    }

    if (lname) {
      if (lname.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Last name" });
      if (isvalidName(lname))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Last Name" });
    }

    if (phoneP) {
      if (phoneP.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Number" });
      if (isvalidPhone(phoneP))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    if (phoneB) {
      if (phoneB.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Number" });
      if (isvalidPhone(phoneB))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    let existphone = await hrModel.findOne({
      $or: [{ phoneP: phoneP }, { phoneB: phoneB }],
    });
    if (existphone) {
      return res.status(400).send({
        status: false,
        msg: "User with this phone number is already registered.",
      });
    }

    if (email) {
      if (email.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid email" });
      if (isvalidEmail(email))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid Email" });
    }

    let existEmail = await hrModel.findOne({ email: email });
    if (existEmail) {
      return res.status(400).send({
        status: false,
        msg: "User with this email is already registered",
      });
    }
    if (Address) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter Address for registartion" });
    }
    if (isvalidAddress(Address)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Address" });
    }

    if (Alias) {
      if (Alias.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Alias name" });
      if (isvalidName(Alias))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Alias Name" });
    }

    if (WfhLocation) {
      if (WfhLocation.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid location" });
      if (isvalidAddress(WfhLocation))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid location" });
    }

    if (doj) {
      if (doj.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Date of joining" });
      if (!isValidDate(doj))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Date of joining" });
    }

    if (probation) {
      if (probation.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid probation period",
        });
      if (isvalidProbation(probation))
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid probation period",
        });
    }

    if (confirmedEmployee) {
      if (confirmedEmployee.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid field" });
      //     if (isvalidboolean(confirmedEmployee))
      //     return res.status(400).send({
      //       status: false,
      //       msg: "please Enter valid criteria"
      //     });
    }
    if (profile) {
      if (profile.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid profile" });
      if (isValidprofile(profile))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid profile",
        });
    }
    if (profileExperience) {
      if (profileExperience.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid profileExperience",
        });
      if (isValidprofileExperience(profileExperience))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid profileExperience",
        });
    }
    if (shift) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter sift for registartion" });
    }
    if (process) {
      if (process.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid process" });
      if (isvalidName(process))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid process",
        });
    }
    // if (bdmBonus) {
    //   if (bdmBonus.trim().length == 0)
    //     return res
    //       .status(400)
    //       .send({ status: false, msg: "Please enter a valid company name" });
    //   if (isvalidName(rebdmBonusferredBy))
    //     return res.status(400).send({
    //       status: false,
    //       msg: "please Enter valid company name",
    //     });
    // }
    // if (msjTarget) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "Please enter msjTarget for registartion",
    //     });
    // }
    // if (mtjTarget) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "Please enter mtjTarget for registartion",
    //     });
    // }
    // if (activeMtj) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "Please enter activeMtj for registartion",
    //     });
    // }
    if (referredBy) {
      if (referredBy.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid  name" });
      if (isvalidName(referredBy))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid name",
        });
    }
    if (salaryBracket) {
      return res.status(400).send({
        status: false,
        msg: "Please enter salaryBracket for registartion",
      });
    }
    if (password) {
      if (password.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid password" });
      if (isvalidPassword(password))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid Password and it's length should be 8-15",
        });
    }
    if (findhrId.isDeleted == true) {
      return res
        .status(404)
        .send({ status: false, msg: "hr is already deleted" });
    }

    let updatedHr = await hrModel.findOneAndUpdate(
      { _id: hrId },
      {
        $set: {
          fname: fname,
          lname: lname,
          username: username,
          email: email,
          phoneP: phoneP,
          phoneB: phoneB,
          Address: Address,
          Alias: Alias,
          WfhLocation: WfhLocation,
          doj: doj,
          probation: probation,
          confirmedEmployee: confirmedEmployee,
          tenure: tenure,
          profile: profile,
          profileExperience: profileExperience,
          shift: shift,
          process: process,
          referredBy: referredBy,
          salaryBracket: salaryBracket,
          password: password,
        },
      },
      { new: true }
    );

    return res
      .status(200)
      .send({ status: true, message: "hr", data: updatedHr });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

//============================deleteBook===================================//
const DeleteHr = async function (req, res) {
  try {
    let hrId = req.body.hrId;
    if (!mongoose.Types.ObjectId.isValid(hrId))
      return res
        .status(400)
        .send({ status: false, msg: "please enter valid username" });
    const savedata = await hrModel.findById(hrId);
    if (savedata.isDeleted == true) {
      return res
        .status(404)
        .send({ status: false, message: "hr is already removed" });
    }

    const deleteHr = await hrModel.findByIdAndUpdate(
      { _id: hrId },
      { $set: { isDeleted: true, deletedAt: Date.now() } }
    );
    return res
      .status(200)
      .send({ status: true, message: "Hr has been deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};
export { createHr, login, getHrByquery, updateHr, DeleteHr };
