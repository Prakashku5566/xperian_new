import mongoose from "mongoose";
const CandidateSchema = new mongoose.Schema(
  {
    hrId: {
      type: String,
      required: true,
    },
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
    // todo:madhuri
    // phoneForCalling
    phoneforcalling: {
      type: String,
      required: true,
    },
    phoneforWp: String,
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
      enum: ["Experience", "Fresher"],
      required: true,
    },

    dateOfAdd: {
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

export default mongoose.model("Candidate", CandidateSchema);
