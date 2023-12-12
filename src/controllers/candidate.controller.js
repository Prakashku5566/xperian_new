import candidateModel from "../models/canndidate.model.js"
import mongoose from "mongoose";

//==============================createUser=====================================//

const createCandidate = async (req, res) => {
  try {
    let {
      fname,
      lname,
      phoneforcalling,
      // phoneforWp,
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
      status,
      hr,
      dateOfAdd,
      dateOfSelection,
      livestatus,
      dateOfjoining,
      dateOfLeft,
      dateOfterminated,
      companyName,
      lockInDate,
      hrLocked,
      completionOfCompanyLockIn,
    } = req.body;

    if (Object.keys(req.body).length == 0) {
      return res
        .status(400)
        .send({ status: false, msg: "Candidate data is required" });
    }

    if (!fname) {
      return res.status(400).send({ status: false, msg: "Enter your  Name" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(fname)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Name" });
    }
    if (!lname) {
      return res.status(400).send({ status: false, msg: "Enter your  Name" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(lname)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Name" });
    }

    if (!phoneforcalling) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    }
    if (!/^[\s]*[6-9]\d{9}[\s]*$/.test(phoneforcalling)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid phone Number" });
    }
    // if (!phoneforWp) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Enter your phone Number. Its mandatory" });
    // }
    // if (!/^[\s]*[6-9]\d{9}[\s]*$/.test(phoneforWp)) {
    //   return res
    //     .status(400)
    //     .send({ status: false, msg: "Please Enter valid phone Number" });
    // }

    let existphone = await candidateModel.findOne({ phoneforcalling: phoneforcalling });
    if (existphone) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "User with this phone number is already exist",
        });
    }

    if (!email) {
      return res.status(400).send({ status: false, msg: "Enter your email " });
    }
    if (!/^[a-z0-9_]{1,}@[a-z]{3,10}[.]{1}[a-z]{3}$/.test(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter valid Email" });
    }

    let existEmail = await candidateModel.findOne({ email: email });
    if (existEmail) {
      return res
        .status(400)
        .send({ status: false, msg: "User with this email is already exist" });
    }
    if (!locationZone) {
      return res.status(400).send({ status: false, msg: "Enter the locationZone" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(locationZone)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid locationZone" });
    }
    if (!locationArea) {
      return res.status(400).send({ status: false, msg: "Enter the locationArea" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(locationArea)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid locationArea" });
    }
    if (!locationCity) {
      return res.status(400).send({ status: false, msg: "Enter the locationCity" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(locationCity)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid locationCity" });
    }
    if (!preferedLocationA) {
      return res.status(400).send({ status: false, msg: "Enter the preferedLocation" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(preferedLocationA)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Location" });
    }
    if (!preferedLocationB) {
      return res.status(400).send({ status: false, msg: "Enter the second preferedLocation" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(preferedLocationB)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Location" });
    }
    if (!preferedLocationC) {
      return res.status(400).send({ status: false, msg: "Enter the third preferedLocation" });
    }
    if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(preferedLocationC)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please enter a valid Location" });
    }

    if (!experienceCallProcess) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the experience of the candidate" });
    }

    if (!language) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the language candidate knows" });
    }

    if (!profile) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "Enter the profile of candidate that he or she has experience or not",
        });
    }
    if (
      ![ 
      "Experience",
      "Fresher"
      ].includes(profile)
    ) {
      return res
        .status(400)
        .send({
          status: false,
          msg: " profile must be type of ['Experience'or'Fresher']",
        });
    }

    if (!status) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the status of the candidate" });
    }
    if (
      ![ 
        "selected",
        "Rejected",
      ].includes(status)
    ) {
      return res
        .status(400)
        .send({
          status: false,
          msg: " status must be type of ['Rejected'or'selected']",
        });
    }
    if (!hr) {
      return res
        .status(400)
        .send({ status: false, msg: "By which Hr the candidate is added" });
    }
    if (!dateOfAdd) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date of addtion" });
    }
    
    if (!dateOfSelection) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date of selection" });
    }
    if (!livestatus) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the livestatus of the candidate" });
    }
    if (
      ![ "joined",
         "left",
         "terminated"
         ].includes(livestatus)
    ) {
      return res
        .status(400)
        .send({
          status: false,
          msg: " status must be type of ['joined','left'or'Terminated']",
        });
    }
    if (!dateOfjoining) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date of joining" });
    }
    if (!dateOfLeft) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date when the candidate is left the company" });
    }
    if (!dateOfterminated) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date when the candidate is terminated from the company" });
    }
    if (!companyName) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the companyname where the candidate is selected or joined" });
    }
    if (!lockInDate) {
      return res
        .status(400)
        .send({ status: false, msg: "Enter the date of lock In date of the company" });
    }
    if (!completionOfCompanyLockIn) {
      return res
        .status(400)
        .send({ status: false, msg: "please add company lockin date" });
    }
    if (
      ![ "yes",
          "no",
      ].includes(completionOfCompanyLockIn)
    ) {
      return res
        .status(400)
        .send({
          status: false,
          msg: " completionOfCompanyLockIn must be type of ['yes','no']",
        });
    }
    if (!hrLocked) {
      return res
        .status(400)
        .send({ status: false, msg: "please add is hr locked in or not" });
    }
    if (
      ![ "yes",
          "no",
      ].includes(hrLocked)
    ) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "  only type of ['yes','no']",
        });
    }
    

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
      const filter = { isDeleted: false }

      const queryParams = req.query
      {
          const {candidateId,fname,phone,profile,status ,livestatus,locationCity,locationArea,locationZone,preferedLocationA,language} = queryParams
          if (candidateId) {
              if (!mongoose.Types.ObjectId.isValid(candidateId)) {
                  return res.status(400).send({ status: false, msg: `please enter a valid companyId` })
              }
           filter["candidateId"] = candidateId
            }
          if (fname) {
              filter['fname'] = fname
          }

          if (phone) {
              filter['phone'] =phone
         }
         if (profile) {
          filter['profile'] =profile
      }
     if (livestatus) {
      filter['livestatus'] =livestatus
    }
    if (locationCity) {
      filter['locationCity'] =locationCity
    }
    if (locationArea) {
      filter['locationArea'] =locationArea
    }
    if (locationZone) {
      filter['locationZone'] =locationZone
    }
    if (preferedLocationA) {
      filter['preferedLocationA'] =preferedLocationA
    }
   if (language) {
    filter['language'] =language
  }
      }
      const candiadte = await candidateModel.find(filter)  //.select({  hrId: 1,name:1, username: 1, phone: 1}).collation({ locale: "en" }).sort({ name: 1 })

      if (Object.keys(candiadte).length == 0)
      return res.status(404).send({ status: false, msg: "No Such candiadte is found" })

     return res.status(200).send({ status: true, message: 'company list', data:candiadte })

  }
  catch (err) {
      // console.log(err.message)
      res.status(500).send({ status: false, Error: err.message })
  }
}
//=========================================UPDATE Company========================================================//

const updateCandidate = async (req, res) => {
  try {
      let candidateId = req.params.candidateId
      const { 
      fname,
      lname,
      phoneforcalling,
      // phoneforWp,
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
      status,
      hr,
      dateOfAdd,
      dateOfSelection,
      livestatus,
      dateOfjoining,
      dateOfLeft,
      dateOfterminated,
      companyName,
      lockInDate,
      hrLocked,
      completionOfCompanyLockIn,
    } = req.body;

      if (Object.keys(req.body).length == 0)
          return res
        .status(400)
        .send({ 
          status: false, msg: "Please Enter Details For Updating"
         })

      if (!candidateId) {
          return res
          .status(400)
          .send({ 
            status: false, msg: "candidateId must be present" 
          })
      }

      if (!mongoose.Types.ObjectId.isValid(candidateId)) {
          return res
          .status(400)
          .send({
             status: false, msg: `this  candidateId is not a valid Id` 
            })
      }
      let findcandidateId = await candidateModel.findById(candidateId)

      
      if (!findcandidateId) {
          return res
          .status(404)
          .send({ 
            status: false, msg: "no candidate found with this Company Id"
           })
      }
      if (fname) {
        if(fname.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid First name"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(fname)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid First Name" });
      }
      if (lname) {
        if(lname.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid lname" 
      })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(lname)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid lname" });
      }
  
      if (phoneforcalling) {
        if(phoneforcalling.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid Number"
       })
      if (!/^[\s]*[6-9]\d{9}[\s]*$/.test(phoneforcalling)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid phone Number" });
      }
      let existphone = await candidateModel.findOne({ phoneforcalling: phoneforcalling });
      if (existphone) {
        return res
          .status(400)
          .send({
            status: false,
            msg: "User with this phone number is already registered.",
          });
      }
  
      if (email) {
        if(email.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid email" 
      })
      if (!/^[a-z0-9_]{1,}@[a-z]{3,10}[.]{1}[a-z]{3}$/.test(email)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please Enter valid Email" });
      }
  
      let existEmail = await candidateModel.findOne({ email: email });
      if (existEmail) {
        return res
          .status(400)
          .send({
            status: false,
            msg: "User with this email is already registered",
          });
      }
      if (locationZone) {
        if(locationZone.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid locationZone"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(locationZone)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a locationZone" });
      }
      if (locationArea) {
        if(locationArea.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid locationArea"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(locationArea)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid locationArea" });
      }
      if (locationCity) {
        if(locationCity.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid locationCity"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(locationCity)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid locationCity" });
      }
      if (preferedLocationA) {
        if(preferedLocationA.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid location"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(preferedLocationA)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid location" });
      }
      if (preferedLocationB) {
        if(preferedLocationB.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid Location"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(preferedLocationB)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Location" });
      }
      if (preferedLocationC) {
        if(preferedLocationC.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid Location"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(preferedLocationC)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Location" });
      }
     
     

      if (experienceCallProcess) {
        if(experienceCallProcess.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid experienceCallProcess"
       })
  
      }
      if (language) {
        if(language.trim().length==0)
         return res
        .status(400)
        .send({ 
          status: false, msg: "Please enter a valid language" 
        })
  
      }
      if (profile) {
        if(profile.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false,
         msg: "Please enter a valid profile"
         })
        if (
          [ 
          "Experience",
          "Fresher"
          ].includes(profile)
        ) 
          return res
            .status(400)
            .send({
              status: false,
              msg: " profile must be type of ['Experience'or'Fresher']",
            });
      }
      if (status) {
        if(status.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid status"
       })
       if (
        [ 
          "selected",
          "Rejected",
        ].includes(status)
      ) {
        return res
          .status(400)
          .send({
            status: false,
            msg: " status must be type of ['Rejected'or'selected']",
          });
      }
    }
      if (hr) {
        if(hr.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid Hr name"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(hr)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid Hr Name" });
      }
      if (dateOfAdd) {
        if(dateOfAdd.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid dateOfAdd" 
      })
      }
      if (dateOfSelection) {
        if(dateOfSelection.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid dateOfSelection" 
      })
      }
      
      if (livestatus) {
        if(livestatus.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid livestatus"
       })
       if (
        [ "joined",
         "left",
         "terminated"
         ].includes(livestatus)
      ) {
        return res
          .status(400)
          .send({
            status: false,
            msg: " status must be type of ['joined','left'or'terminated']",
          });
      }
    }

      if (dateOfjoining) {
        if(dateOfjoining.trim().length==0) 
        return res
      .status(400)
      .send({
         status: false, msg: "Please enter a valid dateOfjoining"
         })
      }
      if (dateOfLeft) {
        if(dateOfLeft.trim().length==0) 
        return res
      .status(400)
      .send({
         status: false, msg: "Please enter a valid dateOfLeft"
         })
      }
      if (dateOfterminated) {
        if(dateOfterminated.trim().length==0) 
        return res
      .status(400)
      .send({
         status: false, msg: "Please enter a valid dateOfterminated"
         })
      }
      if (completionOfCompanyLockIn) {
        if(completionOfCompanyLockIn.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid completionOfCompanyLockIn" 
      })
        if (
          [ "yes",
              "no",
          ].includes(completionOfCompanyLockIn)
        ) 
          return res
            .status(400)
            .send({
              status: false,
              msg: " completionOfCompanyLockIn must be type of ['yes','no']",
            });
      }
      if (companyName) {
        if(companyName.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid companyName"
       })
      if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(companyName)) 
        return res
          .status(400)
          .send({ status: false, msg: "Please enter a valid companyName" });
      }
      
      if (lockInDate) {
        if(lockInDate.trim().length==0) 
        return res
      .status(400)
      .send({
         status: false, msg: "Please enter a valid lockInDate"
         })
      }
      if (hrLocked) {
        if(hrLocked.trim().length==0) 
        return res
      .status(400)
      .send({ 
        status: false, msg: "Please enter a valid feild" 
      })
        if (
          [ "yes",
              "no",
          ].includes(hrLocked)
        ) 
          return res
            .status(400)
            .send({
              status: false,
              msg: " hrLocked must be type of ['yes','no']",
            });
      }

      if (candidateId.isDeleted == true) {
          return res.status(404).send({ status: false, msg: "Candidate is already deleted" })
      }
 
      let updatedCompany = await candidateModel.findOneAndUpdate({ _id: candidateId }, {
          $set: {
            fname:fname,
            lname:lname,
            phoneforcalling:phoneforcalling,
            // phoneforWp:phoneforWp,
            email:email,
          locationZone:locationZone,
          locationArea:locationArea,
          locationCity:locationCity,
          preferedLocationA:preferedLocationA,
          preferedLocationB:preferedLocationB,
          preferedLocationC:preferedLocationC,
            experienceCallProcess:experienceCallProcess,
            language:language,
            profile:profile,
            status:status,
            hr:hr,
            dateOfAdd:dateOfAdd,
            dateOfSelection:dateOfSelection,
            livestatus:livestatus,
            dateOfjoining:dateOfjoining,
            dateOfLeft:dateOfLeft,
            dateOfterminated:dateOfterminated,
            companyName:companyName,
            lockInDate:lockInDate,
            hrLocked:hrLocked,
            completionOfCompanyLockIn:completionOfCompanyLockIn
         },
      }, { new: true })

      return res.status(200).send({ status: true, message: "Company", data: updatedCompany })
  }
  catch (err) {
      res.status(500).send({ status: false, msg: err.message })
  }
};


//========================================================deleteCompany===================================//
const DeleteCandidate = async function (req, res) {
  try {

      let candidateId = req.params.candidateId
      if (!mongoose.Types.ObjectId.isValid(candidateId))
          return res.status(400).send({ status: false, msg: "please enter valid candidateId" })
      const savedata = await candidateModel.findById(candidateId)
      if (savedata.isDeleted == true) {
          return res.status(404).send({ status: false, message: "candidate is already removed" })
      }

      const deleteCompany = await candidateModel.findByIdAndUpdate({ _id: candidateId }, { $set: { isDeleted: true, deletedAt: Date.now() } });
      return res.status(200).send({ status: true, message: "Candidate has been deleted successfully" })


  } catch (error) {
      res.status(500).send({ status: false, msg: error.message });

  }
}

export {createCandidate,getCandidateByquery,updateCandidate,DeleteCandidate} 
