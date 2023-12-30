import mongoose from "mongoose";
const HrSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
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
      // required: true,
      // unique: true,
    },
    email: {
      type: String,
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
      enum: ["Yes", "No"],
      default: "No",
      // required: true,
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
      enum: ["Fresher", "Experienced"],
      required: true,
    },
    coach: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    teamLeader: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    manager: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    shift: {
      type: String,
      required: true,
    },
    process: {
      type: String,
      required: true,
    },
    joiningCount: {
      type: Number,
      default: 0,
    },
    selectedCount: {
      type: Number,
      default: 0,
    },
    bdmBonus: [String],
    bdmAddDate: Date,

    msjTarget: Number,
    actualMsj: Number,
    mtjTarget: Number,
    activeMtj: Number,
    referredBy: String,
    salaryBracket: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hr", HrSchema);
