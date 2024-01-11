import mongoose from "mongoose";
const HrSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    alias_name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    WfhLocation: {
      type: String,
    },
    phoneP: {
      type: String,
      // required: true,
      // unique: true,s
    },
    phoneB: {
      type: String,
      required: true,
      // unique: true,s
    },
    email: {
      type: String,
      unique: true,
    },
    doj: {
      type: String,
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
    },
    tenure: {
      type: String,
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
    // bdmBonus: {
    //   type: String,
    //   required: true,
    // },
    // bdmAddDate: {
    //   type: String,
    //   required: true,
    // },
    // msjTarget: {
    //   type: Number,

    // },
    // actualMsj: {
    //   type: Number,

    // },
    // mtjTarget: {
    //   type: Number,

    // },
    // activeMtj: {
    //   type: Number,

    // },
    referredBy: {
      type: String,
    },
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
