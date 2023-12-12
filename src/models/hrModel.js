import mongoose from "mongoose";
const HrSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
   
    Alias: {
      type: String,
      required: true,
      unique: true,
    },
    Address: {
      type: String,
      required: true,
    },
    WfhLocation: {
      type: String,
      required: true,
    },
    phoneP: {
      type: Number,
      required: true,
      unique: true,
    },
    phoneB: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    doj: {
      type: Date,
      required: true,
    },
    probation: {
      type: String,
      required: true,
    },
    confirmedEmployee: {
      type: String,
      enum:[
        "Yes",
        "No",
      ],
      default:"No",
     required: true,
    },
    tenure: {
      type: Number,
    },

    profile: {
      type: String,
      enum: [
        "Hr recruiter",
        "Coach",
        "Team leader",
        "Team manager",
        "Buisness head",
        "Business development manager",
        "Business development executive",
        "AccountExecutive",
        "MIS executive",
       ],
      required: true,
    },
    profileExperience: {
      type: String,
      enum:[
        "Fresher",
        "Experienced"
      ],
      required: true,
    },
    coach: {
      type: String,
    
    },
    teamLeader: {
      type: String,
  
    },
    manager: {
      type: String,
    
    },
    shift: {
      type: String,
      required: true,
    },
    process: {
      type: String,
      required: true,
    },
    bdmBonus: {
      type: String,
      required: true,
    },
    bdmAddDate:{
      type: Date,
      required: true,
    },
    msjTarget: {
      type: Number,
    
    },
    actualMsj: {
      type: Number,

    },
    mtjTarget: {
      type: Number,
  
    },
    activeMtj: {
      type: Number,
  
    },
    referredBy: {
      type: String,

    },
    salaryBracket: {
      type:Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDeleted: {
      type:Boolean, 
      default: false
    },
    deletedAt: {
      type:Date
    }, 

  },
  { timestamps: true }
);

const hrModel = mongoose.model("Hr", HrSchema);
export default hrModel;
