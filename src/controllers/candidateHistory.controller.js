import candidateHistoryModel from "../models/candidateH.model.js";
import mongoose from "mongoose";
import { isValidprofile, isValidDate, isvalidName, isvalidEmail, isvalidPhone, isvalidCompanyName, isvalidAddress, isValidprofileExperience, isvalidboolean, isvalidLocation, isvalidLanguage, isvalidStatus, isvalidLiveStatus } from "../validator/validator.js";
//==============================createUser=====================================//

const createHistoryCandidate = async (req, res) => {
  try {
    let {
     companyName,
     companylocation,
      hr,
      status,
    //   dateOfAdd,
      dateOfSelection,
      livestatus,
      dateOfjoining,
      dateOfLeft,
      dateOfterminated,
      lockInDate,
      hrLocked,
      completionOfCompanyLockIn,
    } = req.body;

    if (Object.keys(req.body).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "Candidate data is required" });
    }

    if (!status) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the status of the candidate" });
    }
    if (!isvalidStatus(status)) {
      return res.status(400).send({
        status: false,
        msg: " status must be type of ['Rejected'or'selected']",
      });
    }
    if (!hr) {
      return res
        .status(400)
        .send({ status: false, msg: "By which Hr the candidate is added" });
    }
    if (isvalidName(hr)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Hr Name" });
    }
    if (!companylocation) {
        return res
          .status(400)
          .send({ status: false, msg: "Enter the comapny Location" });
      }
      if (isvalidLocation(companylocation)) {
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid comapny Location" });
      }

    // if (!dateOfAdd) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the date of addtion" });
    // }
    // if (isValidDate(dateOfAdd)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid date of Add",
    //   });
    // }

    // if (dateOfSelection) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the date of selection" });
    // }
    // if (isValidDate(dateOfSelection)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid date of dateOfSelection",
    //   });
    // }
    // if (livestatus) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the livestatus of the candidate" });
    // }
    // if (!isvalidLiveStatus(livestatus)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: " status must be type of ['joined','left'or'Terminated']",
    //   });
    // }
    // if (dateOfjoining) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the date of joining" });
    // }
    // if (isValidDate(dateOfjoining)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid date of joining",
    //   });
    // }
    // if (dateOfLeft) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "Enter the date when the candidate is left the company",
    //     });
    // }
    // if (isValidDate(dateOfLeft)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid date ",
    //   });
    // }
    // if (dateOfterminated) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the date when the candidate is terminated from the company" });
    // }
    // if (isValidDate(dateOfterminated)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid date of dateOftermination",
    //   });
    // }
    if (!companyName) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "Enter the companyname where the candidate is selected , joined or aling for the interview",
        });
    }
    if (isvalidCompanyName(companyName)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid CompanyName",
      });
    }
    // if (lockInDate) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "Enter the date of lock In date of the company",
    //     });
    // }
    // if (isValidDate(lockInDate)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid lockInDate",
    //   });
    // }
    // if (completionOfCompanyLockIn) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "please add company lockin" });
    // }
    // if (isvalidboolean(completionOfCompanyLockIn)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: " completionOfCompanyLockIn must be type of ['yes','no']",
    //   });
    // }
    // if (hrLocked) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "please add is hr locked in or not" });
    // }
    // if (isvalidboolean(hrLocked)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "  only type of ['yes','no']",
    //   });
    // }

    let savedData = await candidateHistoryModel.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};


export {
    createHistoryCandidate,
   
  };