import candidateModel from "../models/canndidate.model.js";
import mongoose from "mongoose";
import { isValidprofile, isValidDate, isvalidName, isvalidEmail, isvalidPhone, isvalidCompanyName, isvalidAddress, isValidprofileExperience, isvalidboolean, isvalidLocation, isvalidLanguage, isvalidStatus, isvalidLiveStatus } from "../validator/validator.js";
//==============================createUser=====================================//

const createCandidate = async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      phoneforcalling,
      phoneforWp,
      email,
      locationZone,
      locationArea,
      locationCity,
      preferedLocationA,
      preferedLocationB,
      preferedLocationC,
      experienceCallProcess,
      language,
      profile,
      dateOfAdd,
    } = req.body;

    if (Object.keys(req.body).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "Candidate data is required" });
    }

    if (!firstName) {
      return res.status(400).send({ status: false, msg: "Enter your  Name" });
    }
    if (isvalidName(firstName)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Name" });
    }
    if (!lastName) {
      return res.status(400).send({ status: false, msg: "Enter your  Name" });
    }
    if (isvalidName(lastName)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Name" });
    }
    // if (!email) {
    //   return res.status(400).send({ status: false, msg: "Enter your email " });
    // }
    // if (isvalidEmail(email)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Enter valid Email" });
    // }

    // let existEmail = await candidateModel.findOne({ email: email });
    // if (existEmail) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "User with this email is already exist" });
    // }
    // if (!phoneforcalling) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    // }
    // if (isvalidPhone(phoneforcalling)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Enter valid phone Number" });
    // }
    // if (!phoneforWp) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    // }
    // if (isvalidPhone(phoneforWp)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Enter valid phone Number" });
    // }

    let existphone = await candidateModel.findOne({
      phoneforWp: phoneforWp,
    });
    if (existphone) {
      return res.status(400).send({
        status: false,
        msg: "User with this phone number is already exist",
      });
    }


    if (!locationZone) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the Zone" });
    }
    if (isvalidLocation(locationZone)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Zone" });
    }
    if (!locationArea) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the Area" });
    }
    if (isvalidLocation(locationArea)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Area" });
    }
    if (!locationCity) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the City" });
    }
    if (isvalidLocation(locationCity)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid City" });
    }
    if (!preferedLocationA) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the preferedLocation" });
    }
    if (isvalidLocation(preferedLocationA)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Location" });
    }
    // if (!preferedLocationB) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the second preferedLocation" });
    // }
    if (isvalidLocation(preferedLocationB)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Location" });
    }
    // if (!preferedLocationC) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the third preferedLocation" });
    // }
    if (isvalidLocation(preferedLocationC)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Location" });
    }

    // if (!experienceCallProcess) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter the experience of the candidate" });
    // }
    if (isvalidLanguage(experienceCallProcess)) {
      return res.status(400).send({
        status: false,
        msg: "Please Enter the valid experience ",
      });
    }
    if (!language) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the language candidate knows" });
    }
    if (isvalidLanguage(language)) {
      return res.status(400).send({
        status: false,
        msg: "please specify the language",
      });
    }

    // if (!profile) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "Enter the profile of candidate that he or she has experience or not",
    //   });
    // }
    if (isvalidLanguage(profile)) {
      return res.status(400).send({
        status: false,
        msg: " profile must be type of ['Experience'or'Fresher']",
      });
    }
    if (!dateOfAdd) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date of addtion" });
    }
    // if (isValidDate(dateOfAdd)) {
    //   return res.status(400).send({
    //     status: false,
    //     msg: "please Enter valid date of Add",
    //   });
    // }

    let savedData = await candidateModel.create(req.body);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: savedData });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};
//=================================getByquery============================================//

const getCandidateByquery = async (req, res) => {
  try {
    const filter = { isDeleted: false };

    const queryParams = req.query;
    {
      const {
        candidateId,
        firstName,
        phoneforcalling,
        phoneforWp,
        profile,
        status,
        livestatus,
        locationCity,
        locationArea,
        locationZone,
        preferedLocationA,
        language,
      } = queryParams;
      if (candidateId) {
        if (!mongoose.Types.ObjectId.isValid(candidateId)) {
          return res
            .status(400)
            .send({ status: false, msg: `please enter a valid companyId` });
        }
        filter["candidateId"] = candidateId;
      }
      if (fname) {
        filter["firstName"] = firstName;
      }

      if (phoneforcalling) {
        filter["phoneforcalling"] = phoneforcalling;
      }
      if (phoneforWp) {
        filter["phoneforWp"] = phoneforWp;
      }
      if (profile) {
        filter["profile"] = profile;
      }
      if (status) {
        filter["status"] = status;
      }
      if (livestatus) {
        filter["livestatus"] = livestatus;
      }
      if (locationCity) {
        filter["locationCity"] = locationCity;
      }
      if (locationArea) {
        filter["locationArea"] = locationArea;
      }
      if (locationZone) {
        filter["locationZone"] = locationZone;
      }
      if (preferedLocationA) {
        filter["preferedLocationA"] = preferedLocationA;
      }
      if (language) {
        filter["language"] = language;
      }
    }
    const candiadte = await candidateModel.find(filter); //.select({  hrId: 1,name:1, username: 1, phone: 1}).collation({ locale: "en" }).sort({ name: 1 })

    if (Object.keys(candiadte).length == 0)
      return res
        .status(404)
        .send({ status: false, msg: "No Such candiadte is found" });

    return res
      .status(200)
      .send({ status: true, message: "candidate list", data: candiadte });
  } catch (err) {
    // console.log(err.message)
    res.status(500).send({ status: false, Error: err.message });
  }
};
//=========================================UPDATE Company========================================================//

const updateCandidate = async (req, res) => {
  try {
    let candidateId = req.params.candidateId;
    const {
      firstName,
      lastName,
      phoneforcalling,
      phoneforWp,
      email,
      locationZone,
      locationArea,
      locationCity,
      preferedLocationA,
      preferedLocationB,
      preferedLocationC,
      experienceCallProcess,
      language,
      profile,
      dateOfAdd,

    } = req.body;

    if (Object.keys(req.body).length == 0)
      return res.status(400).send({
        status: false,
        msg: "Please Enter Details For Updating",
      });

    if (!candidateId) {
      return res.status(400).send({
        status: false,
        msg: "candidateId must be present",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(candidateId)) {
      return res.status(400).send({
        status: false,
        msg: `this  candidateId is not a valid Id`,
      });
    }
    let findcandidateId = await candidateModel.findById(candidateId);

    if (!findcandidateId) {
      return res.status(404).send({
        status: false,
        msg: "no candidate found with this Company Id",
      });
    }
    if (firstName) {
      if (firstName.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid First name",
        });
      if (isvalidName(firstName))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid First Name" });
    }
    if (lastName) {
      if (lastName.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid lname",
        });
      if (isvalidName(lastName))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid lname" });
    }

    if (phoneforcalling) {
      if (phoneforcalling.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid Number",
        });
      if (isvalidPhone(phoneforcalling))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    if (phoneforWp) {
      if (phoneforWp.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid Number",
        });
      if (isvalidPhone(phoneforWp))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    let existphone = await candidateModel.findOne({
      phoneforWp: phoneforWp,
    });
    if (existphone) {
      return res.status(400).send({
        status: false,
        msg: "User with this phone number is already registered.",
      });
    }

    if (email) {
      if (email.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid email",
        });
      if (isvalidEmail(email))
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid Email" });
    }

    let existEmail = await candidateModel.findOne({ email: email });
    if (existEmail) {
      return res.status(400).send({
        status: false,
        msg: "User with this email is already registered",
      });
    }
    if (locationZone) {
      if (locationZone.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid locationZone",
        });
      if (isvalidLocation(locationZone))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a locationZone" });
    }
    if (locationArea) {
      if (locationArea.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid locationArea",
        });
      if (isvalidLocation(locationArea))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid locationArea" });
    }
    if (locationCity) {
      if (locationCity.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid locationCity",
        });
      if (isvalidLocation(locationCity))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid locationCity" });
    }
    if (preferedLocationA) {
      if (preferedLocationA.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid location",
        });
      if (isvalidLocation(preferedLocationA))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid location" });
    }
    if (preferedLocationB) {
      if (preferedLocationB.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid Location",
        });
      if (isvalidLocation(preferedLocationB))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Location" });
    }
    if (preferedLocationC) {
      if (preferedLocationC.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid Location",
        });
      if (isvalidLocation(preferedLocationC))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Location" });
    }

    if (experienceCallProcess) {
      if (experienceCallProcess.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid experienceCallProcess",
        });
      if (isvalidLanguage(experienceCallProcess))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid experience" });
    }


    if (language) {
      if (language.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid language",
        });
      if (isvalidLanguage(language))
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid language" });
    }

    if (profile) {
      if (profile.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid profile",
        });
      if (isValidprofileExperience(profile))
        return res.status(400).send({
          status: false,
          msg: " profile must be type of ['Experience'or'Fresher']",
        });
    }
    if (dateOfAdd) {
      if (dateOfAdd.trim().length == 0)
        return res.status(400).send({
          status: false,
          msg: "Please enter a valid dateOfAdd",
        });
    }

    if (candidateId.isDeleted == true) {
      return res
        .status(404)
        .send({ status: false, msg: "Candidate is already deleted" });
    }

    let updatedCompany = await candidateModel.findOneAndUpdate(
      { _id: candidateId },
      {
        $set: {
          fname: fname,
          lname: lname,
          phoneforcalling: phoneforcalling,
          // phoneforWp:phoneforWp,
          email: email,
          locationZone: locationZone,
          locationArea: locationArea,
          locationCity: locationCity,
          preferedLocationA: preferedLocationA,
          preferedLocationB: preferedLocationB,
          preferedLocationC: preferedLocationC,
          experienceCallProcess: experienceCallProcess,
          language: language,
          profile: profile,
          dateOfAdd: dateOfAdd,

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

// const deleteCandidate = async function (req, res) {
//   try {
//     let candidateId = req.params.candidateId;
//     if (!mongoose.Types.ObjectId.isValid(candidateId))
//       return res
//         .status(400)
//         .send({ status: false, msg: "please enter valid candidateId" });
//     const savedata = await candidateModel.findById(candidateId);
//     if (savedata.isDeleted == true) {
//       return res
//         .status(404)
//         .send({ status: false, message: "candidate is already removed" });
//     } catch (err) {
//       res.status(500).send({ status: false, msg: err.message });
//     }
//   }
// }
const getAllCandidates = async (req, res) => {

  try {
    let allData = await candidateModel.find()

    return res.status(200).send({ data: allData, status: true })
  } catch (error) {
    return res.status(500).send({ data: error, status: false })

  }

}



//     const DeleteCandidate = await candidateModel.findByIdAndUpdate(
//       { _id: candidateId },
//       { $set: { isDeleted: true, deletedAt: Date.now() } }
//     );
//     return res
//       .status(200)
//       .send({
//         status: true,
//         message: "Candidate has been deleted successfully",
//       });
//   } catch (error) {
//     res.status(500).send({ status: false, msg: error.message });
//   }
// };

export {
  createCandidate,
  getCandidateByquery,
  updateCandidate,
  // deleteCandidate,
  getAllCandidates
}
