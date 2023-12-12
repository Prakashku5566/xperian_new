import mongoose from "mongoose";
const CandidateSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    locationZone: {
      type: String,
      required: true,
    },
    locationArea: {
      type: String,
      required: true,
    },
    locationCity: {
      type: String,
      required: true,
    },
    preferedLocationA: {
      type: String,
      required: true,
    },
    preferedLocationB: {
      type: String,
      required: true,
    },
    preferedLocationC: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    
    phoneforcalling: {
      type: Number,
      required: true,
    },
    phoneforWp: {
      type: Number,
      required: true,
    },
    experienceCallProcess: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      enum: [
        "Experience",
         "Fresher"
        ],
      required: true,
    },
    hr: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
       "selected",
       "Rejected",
      ],
      required: true,
    },
    dateOfAdd: {
      type: Date,
      required: true,
    },
    dateOfSelection: {
      type: Date,
      required: true,
    },
    livestatus: {
      type: String,
      enum: [
       "joined",
       "left",
       "terminated"
      ],
      required: true,
    },
    dateOfjoining: {
      type: Date,
    },
    dateOfLeft: {
      type: Date,
    },
    dateOfterminated: {
      type: Date,
    },
    companyName: {
      type: String,
      required: true,
    },
    lockInDate: {
      type: Date,
    
    },
    hrLocked: {
      type: String,
      enum: [
       "yes",
       "no",
      ],
    },
    completionOfCompanyLockIn: {
      type: String,
      enum: [
       "yes",
       "no",
      ],
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

export default mongoose.model("Candidate", CandidateSchema);
