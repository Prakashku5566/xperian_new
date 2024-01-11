import companyModel from "../models/company.model.js";
import mongoose from "mongoose";
import {
  isvalidAddress,
  isvalidLanguage,
  isvalidCompanyName,
  isvalidLocation,
  isvalidName,
  isvalidPhone,
  isvalidGstIn,
  isvalidEmail,
  isvalidTypeBpo,
  isvalidNumWord,
  isvalidcallProcess,
  isvalidCab,
  isvalidMeals,
  isvalidInterviewProcess,
  isvalidShiftTime,
  isvalidSalaryBracket,
} from "../validator/validator.js";

//==============================createUser=====================================//

const createCompany = async (req, res) => {
  try {
    let {
      companyName,
      address,
      location,
      gpsLocation,
      websiteURL,
      email,
      ownerName,
      ownerNumber,
      gstIn,
      hrName,
      hrNumber,
      opsManager,
      opsContactNo,
      payOut,
      seatingCapacity,
      currentHeadcount,
      typeOfCompany,
      shift1,
      // sift2,
      // sift3,
      companyAge,
      lockinPeriod,
      hiringRequierments,
      callProcess,
      shiftTiming,
      workingDays,
      weeklyOff,
      otherCities,
      salaryBracket,
      cab,
      meals,
      interviewProcess,
      interviewTiming,
    } = req.body;

    if (Object.keys(req.body).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "for registration user data is required" });
    }

    if (!companyName) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your  companyName" });
    }

    // if (isvalidCompanyName(companyName)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please enter a valid companyName" });
    // }
    if (!address) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter Address for registartion" });
    }
    if (isvalidAddress(address)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid Address",
      });
    }
    if (!location) {
      return res.status(400).send({ status: false, msg: "Enter the location" });
    }
    if (isvalidLocation(location)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid location" });
    }
    // if (gpsLocation) {
    //   return res.status(400).send({ status: false, msg: "Enter the gpsLocation" });
    // }
    // if (!websiteURL) {
    //   return res.status(400).send({ status: false, msg: "Enter the websiteURL" });
    // }
    if (!ownerName) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your  ownerName" });
    }
    if (isvalidName(ownerName)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid ownerName" });
    }
    if (!ownerNumber) {
      return res.status(400).send({
        status: false,
        msg: "Enter company ownerNumber. Its mandatory",
      });
    }
    // console.log("");
    if (isvalidPhone(ownerNumber)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Owner Number" });
    }
    let existphone = await companyModel.findOne({ ownerNumber: ownerNumber });
    if (existphone) {
      return res.status(400).send({
        status: false,
        msg: "Company with this phone Number is already registered.",
      });
    }
    // if (gstIn) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter gstIn Number" });
    // }
    // if (isvalidGstIn(gstIn)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Enter valid gst number" });
    // }
    // let existgstIn = await companyModel.findOne({ gstIn: gstIn });
    // if (existgstIn) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "Company with this gst Number is already registered.",
    //     });
    // }
    if (!email) {
      return res.status(400).send({
        status: false,
        msg: "Enter your email .Its mandatory for registration!!!",
      });
    }
    if (!isvalidEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Email" });
    }
    let existEmail = await companyModel.findOne({ email: email });
    if (existEmail) {
      return res.status(400).send({
        status: false,
        msg: "Company with this email is already registered",
      });
    }

    if (!hrName) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter the Hr name" });
    }

    // if (isvalidName(hrName)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "please Enter valid Name" });
    // }
    if (!hrNumber) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter hr phone Number. Its mandatory" });
    }
    if (isvalidPhone(hrNumber)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid HR Number" });
    }
    // if (opsManager) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please enter the opsManager name" });
    // }

    // if (opsContactNo) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter opsContactNo phone Number" });
    // }
    // if (isvalidPhone(opsContactNo)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Enter valid ops Number" });
    // }

    if (!payOut) {
      return res.status(400).send({ status: false, msg: "Add the payOut" });
    }
    if (isvalidSalaryBracket(payOut)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid payment" });
    }
    if (!seatingCapacity) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the seatingCapacity" });
    }
    if (!currentHeadcount) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the currentHeadcount" });
    }
    if (!typeOfCompany) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the type of typeOfCompany" });
    }
    if (isvalidTypeBpo(typeOfCompany)) {
      return res
        .status(400)
        .send({ status: false, msg: "please Enter valid typeOfCompany" });
    }
    if (!shift1) {
      return res.status(400).send({ status: false, msg: "Add the shift time" });
    }
    if (isvalidLanguage(shift1)) {
      return res
        .status(400)
        .send({ status: false, msg: "please Enter valid sift" });
    }
    if (!companyAge) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the company Age" });
    }
    // if (isvalidNumWord(companyAge)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "please Enter valid age of the company" });
    // }
    if (!lockinPeriod) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the lockinPeriod of this company" });
    }
    if (isvalidNumWord(lockinPeriod)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid lockin period of this company",
      });
    }

    if (!hiringRequierments) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the HiringRequierments" });
    }
    // if (isvalidLanguage(hiringRequierments)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "please Enter valid Hiring Requierments" });
    // }

    // if (otherCities) {
    //   return res.status(400).send({ status: false, msg: "Add if the company loacted in other cities " });
    // }
    if (isvalidLocation(otherCities)) {
      return res.status(400).send({
        status: false,
        msg: "please Enter valid  other company loaction",
      });
    }
    if (!salaryBracket) {
      return res
        .status(400)
        .send({ status: false, msg: "Add the Salary Bracket" });
    }
    if (isvalidSalaryBracket(salaryBracket)) {
      return res
        .status(400)
        .send({ status: false, msg: "please Enter valid salaryBracket" });
    }

    // if (!callProcess) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the callProcess" });
    // }
    // if (!isvalidcallProcess(callProcess)) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: " callProcess must be type of ['Meta/English','PPC/English','Meta/Spanish','PPC/Spanish','bilingual']",
    //     });
    // }

    // if (!shiftTiming) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please mentioned the shiftTiming" });
    // }
    // if (isvalidShiftTime(shiftTiming)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "please Enter valid shiftTiming of this company" });
    // }
    if (!workingDays) {
      return res
        .status(400)
        .send({ status: false, msg: "Please mentioned the workingDays" });
    }
    // if (isvalidNumWord(workingDays)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid workingDays of this company",
    //   });
    // }

    if (!weeklyOff) {
      return res
        .status(400)
        .send({ status: false, msg: "Please mentioned the weekOFFs" });
    }
    // if (isvalidNumWord(weeklyOff)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid weeklyOff of this company",
    //   });
    // }
    // if (!cab) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "please mentioned there is cab available or not",
    //     });
    // }
    // if (!isvalidCab(cab)) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: " cab must be type of ['yes','no','included','depends on route']",
    //     });
    // }
    // if (!meals) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "please mentioned there is meals available or not",
    //     });
    // }
    // if (!isvalidMeals(meals)) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: " meals must be type of ['yes','no','included']",
    //     });
    // }
    // if (!interviewProcess) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please mentioned the interviewProcess" });
    // }
    // if (!isvalidInterviewProcess(interviewProcess)) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: " interviewProcess must be type of ['face to face' or'telephonic']",
    //     });
    // }
    if (!interviewTiming) {
      return res
        .status(400)
        .send({ status: false, msg: "Please mentioned the interviewTiming" });
    }
    // if (isvalidShiftTime(interviewTiming)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid interviewTiming of this company",
    //   });
    // }
    // console.log("pksingh", req.body);
    let savedData = await companyModel.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Created SucessFully", data: savedData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};
//=================================getByquery============================================//

const getCompanyByquery = async (req, res) => {
  try {
    const filter = { isDeleted: false };

    const queryParams = req.query;
    {
      const { companyId, companyName, address, location, callProcess } =
        queryParams;
      if (companyId) {
        if (!mongoose.Types.ObjectId.isValid(companyId)) {
          return res
            .status(400)
            .send({ status: false, msg: `please enter a valid companyId` });
        }
        filter["companyId"] = companyId;
      }

      if (name) {
        filter["companyName"] = companyName;
      }

      if (address) {
        filter["address"] = address;
      }
      if (callProcess) {
        filter["callProcess"] = callProcess;
      }
      if (location) {
        filter["location"] = location;
      }
    }

    const company = await companyModel.find(filter); //.select({  hrId: 1,name:1, username: 1, phone: 1}).collation({ locale: "en" }).sort({ name: 1 })

    if (Object.keys(company).length == 0)
      return res
        .status(404)
        .send({ status: false, msg: "No Such company is found" });

    return res
      .status(200)
      .send({ status: true, message: "company list", data: company });
  } catch (err) {
    // console.log(err.message)
    res.status(500).send({ status: false, Error: err.message });
  }
};

//=========================================UPDATE Company========================================================//

const updateCompany = async (req, res) => {
  try {
    let companyId = req.params.companyId;
    let {
      companyName,
      address,
      location,
      gpsLocation,
      websiteURL,
      email,
      ownerName,
      ownerNumber,
      gstIn,
      hrName,
      hrNumber,
      opsManager,
      opsContactNo,
      payOut,
      // seatingCapacity,
      currentHeadcount,
      typeOfBpo,
      shift1,
      // sift2,
      // sift3,
      companyAging,
      lockinPeriod,
      HiringRequierments,
      callProcess,
      shiftTiming,
      workingDays,
      weeklyOff,
      otherCities,
      salaryBracket,
      cab,
      meals,
      interviewProcess,
      interviewTiming,
    } = req.body;

    if (Object.keys(req.body).length == 0)
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Details For Updating" });

    if (!companyId) {
      return res
        .status(400)
        .send({ status: false, msg: "companyId must be present" });
    }

    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res
        .status(400)
        .send({ status: false, msg: `this  companyId is not a valid Id` });
    }
    let findcompanyId = await companyModel.findById(companyId);
    if (!findcompanyId) {
      return res
        .status(404)
        .send({ status: false, msg: "no Company found with this company Id" });
    }
    if (companyName) {
      // if (companyName.trim().length == 0) return
      // res.status(400).send({ status: false, msg: "Please enter a valid Company name......." })
      if (isvalidCompanyName(companyName))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Company Name" });
    }
    if (address) {
      if (address.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Address" });
      if (isvalidAddress(address))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid Address",
        });
    }
    if (location) {
      if (location.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid location" });
      if (isvalidLocation(location))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid location" });
    }
    if (ownerName) {
      if (ownerName.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid ownerName" });
      if (isvalidName(ownerName))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid ownerName" });
    }
    if (ownerNumber) {
      if (ownerNumber.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Number" });
      if (isvalidPhone(ownerNumber))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    if (gstIn) {
      if (gstIn.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid gstIn" });
      if (isvalidGstIn(gstIn))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid gstIn Number" });
    }
    if (hrName) {
      if (hrName.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid HrName" });
      if (isvalidName(hrName))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid HrName" });
    }
    if (hrNumber) {
      if (hrNumber.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid HrNumber" });
      if (isvalidPhone(hrNumber))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone HrNumber" });
    }
    if (opsManager) {
      if (opsManager.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid opsManager Name" });
      if (!isvalidName(opsManager))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid opsManager Name" });
    }
    if (opsContactNo) {
      if (opsContactNo.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Number" });
      if (isvalidPhone(opsContactNo))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
    }

    if (payOut) {
      if (payOut.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter the pay Out" });
    }
    if (seatingCapacity) {
      if (seatingCapacity.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter the seatingCapacity of this company",
        });
    }
    if (currentHeadcount) {
      if (currentHeadcount.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter the currentHeadcount of this company",
        });
    }
    if (typeOfBpo) {
      if (typeOfBpo.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter typeOfBpo" });
      if (isvalidTypeBpo(typeOfBpo))
        return res
          .status(400)
          .send({ status: false, msg: "please Enter valid typeOfBpo" });
    }
    if (shift1) {
      if (shift1.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter the shift of this company",
        });
      if (isvalidLanguage(shift1))
        return res
          .status(400)
          .send({ status: false, msg: "please Enter valid sift" });
    }
    //companyAging,
    //lockinPeriod,
    if (companyAging) {
      if (companyAging.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter the company Age" });
      if (isvalidNumWord(companyAging))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid age of the company",
        });
    }
    if (lockinPeriod) {
      if (lockinPeriod.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter the company lock in Period",
        });
      if (isvalidNumWord(lockinPeriod))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid lockin period of this company",
        });
    }
    // let existphone = await companyModel.findOne({ phone: phone });
    // if (existphone) {
    //   return res
    //     .status(400)
    //     .send({
    //       status: false,
    //       msg: "User with this phone number is already registered.",
    //     });
    // }

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

    let existEmail = await companyModel.findOne({ email: email });
    if (existEmail) {
      return res.status(400).send({
        status: false,
        msg: "User with this email is already taken",
      });
    }

    if (HiringRequierments) {
      if (HiringRequierments.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid HiringRequierments",
        });
      // if (isvalidLanguage(HiringRequierments)) {
      //   return res.status(400).send({
      //     status: false,
      //     msg: "please Enter valid Hiring Requierments",
      //   });
      // }
    }
    if (callProcess) {
      if (callProcess.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid callProcess" });
      if (isvalidcallProcess(callProcess))
        return res.status(400).send({
          status: false,
          msg: " callProcess must be type of ['Meta/English','PPC/English','Meta/Spanish','PPC/Spanish','bilingual']",
        });
    }
    if (shiftTiming) {
      if (siftTiming.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter  valid shiftTiming" });
      if (isvalidShiftTime(shiftTiming))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid shiftTiming of this company",
        });
    }
    if (workingDays) {
      if (workingDays.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter  valid workingDays" });
      if (isvalidNumWord(workingDays))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid workingDays of this company",
        });
    }
    if (weeklyOff) {
      if (weeklyOff.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid weeklyOff" });
      if (isvalidNumWord(weeklyOff))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid weeklyOff of this company",
        });
    }
    if (otherCities) {
      if (otherCities.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter if this company is located in other cities",
        });
      if (isvalidLocation(otherCities))
        return res.status(400).send({
          status: false,
          msg: "please Enter valid  other company loaction",
        });
    }
    if (salaryBracket) {
      if (salaryBracket.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid salaryBracket" });
      if (isvalidSalaryBracket(salaryBracket))
        return res
          .status(400)
          .send({ status: false, msg: "please Enter valid salaryBracket" });
    }
    if (cab) {
      if (cab.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid detail" });
      if (isvalidCab(cab))
        return res.status(400).send({
          status: false,
          msg: " cab must be type of ['yes','no','included','depends on route']",
        });
    }
    if (meals) {
      if (meals.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid detail" });
      if (isvalidMeals(meals))
        return res.status(400).send({
          status: false,
          msg: " meals must be type of ['yes','no','included']",
        });
    }

    if (interviewProcess) {
      if (interviewProcess.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid detail" });
      if (!isvalidInterviewProcess(interviewProcess))
        return res.status(400).send({
          status: false,
          msg: " interviewProcess must be type of ['face to face' or'telephonic']",
        });
    }
    if (interviewTiming) {
      if (interviewTiming.trim().length == 0)
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid interviewTiming" });
      // if (isvalidShiftTime(interviewTiming))
      //   return res.status(400).send({
      //     status: false,
      //     msg: "please Enter valid interviewTiming of this company",
      //   });
    }
    if (findcompanyId.isDeleted == true) {
      return res
        .status(404)
        .send({ status: false, msg: "Company is already deleted" });
    }

    let updatedCompany = await companyModel.findOneAndUpdate(
      { _id: companyId },
      {
        $set: {
          companyName: companyName,
          address: address,
          location: location,
          gpsLocation: gpsLocation,
          websiteURL: websiteURL,
          email: email,
          ownerName: ownerName,
          ownerNumber: ownerNumber,
          gstIn: gstIn,
          hrName: hrName,
          hrNumber: hrNumber,
          opsManager: opsManager,
          opsContactNo: opsContactNo,
          payOut: payOut,
          seatingCapacity: seatingCapacity,
          currentHeadcount: currentHeadcount,
          typeOfBpo: typeOfBpo,
          shift1: shift1,
          // sift2,
          // sift3,
          companyAging: companyAging,
          lockinPeriod: lockinPeriod,
          HiringRequierments: HiringRequierments,
          callProcess: callProcess,
          shiftTiming: shiftTiming,
          workingDays: workingDays,
          weeklyOff: weeklyOff,
          otherCities: otherCities,
          salaryBracket: salaryBracket,
          cab: cab,
          meals: meals,
          interviewProcess: interviewProcess,
          interviewTiming: interviewTiming,
        },
      },
      { new: true }
    );

    return res
      .status(200)
      .send({ status: true, message: "Company", data: updatedCompany });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

//========================================================deleteBook===================================//
const DeleteCompany = async function (req, res) {
  try {
    let companyId = req.params.companyId;
    if (!mongoose.Types.ObjectId.isValid(companyId))
      return res
        .status(400)
        .send({ status: false, msg: "please enter valid companyId" });
    const savedata = await companyModel.findById(companyId);
    if (savedata.isDeleted == true) {
      return res
        .status(404)
        .send({ status: false, message: "company is already removed" });
    }

    const deleteHr = await companyModel.findByIdAndUpdate(
      { _id: companyId },
      { $set: { isDeleted: true, deletedAt: Date.now() } }
    );
    return res
      .status(200)
      .send({ status: true, message: "Company has been deleted successfully" });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const getAllCOmpany = async (req, res) => {
  try {
    let allData = await companyModel.find();

    return res.status(200).send({ data: allData, status: true });
  } catch (error) {
    return res.status(500).send({ data: error, status: false });
  }
};

export {
  createCompany,
  getCompanyByquery,
  updateCompany,
  DeleteCompany,
  getAllCOmpany,
};
