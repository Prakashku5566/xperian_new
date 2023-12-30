import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const selectionStatusEnum = ["Selected", "Rejected", "Interview_Pending"];
const liveStatusEnum = ["Joined", "Left", "Terminated"];
const hrLockedEnum = ["Yes", "No"];
const completionOfCompanyLockInEnum = ["Yes", "No"];

const CandidatHistoryeSchema = new Schema(
  {
    candidate_Id: {
      type: ObjectId,
      ref: "Canndidate",
      required: true,
      trim: true,
      unique: true,
    },
    hrId: {
      type: String,
      ref: "Hr",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyLocation: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: selectionStatusEnum,
      required: true,
    },
    dateOfSelection: {
      type: Date,
    },
    livestatus: {
      type: String,
      enum: liveStatusEnum,
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
    lockInDate: {
      type: Date,
    },
    hrLocked: {
      type: String,
      enum: hrLockedEnum,
      default: "No",
    },
    completionOfCompanyLockIn: {
      type: String,
      enum: completionOfCompanyLockInEnum,
      default: "No",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default model("CandidatHistory", CandidatHistoryeSchema);
