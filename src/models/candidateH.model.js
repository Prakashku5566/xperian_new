import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const CandidatHistoryeSchema = new Schema(
  {
    candidate_Id: {
      type: Types.ObjectId,
      ref: "canndidate",
      required: true,
      // trim: true,
    },
    hrName: {
      type: Types.ObjectId,
      ref: "hr",
      required: true,
    },
    companyName: {
      type: Types.ObjectId,
      ref: "company",
      required: true,
    },
    selected: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    rejected: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    interviewPending: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    dateOfSelection: {
      type: String,
      default: function () {
        return this.selected === "Yes" ? new Date().toISOString() : null;
      },
    },
    dateOfRejection: {
      type: String,
      default: function () {
        return this.rejected === "Yes" ? new Date().toISOString() : null;
      },
    },
    dateOfInterview: {
      type: String,
      default: function () {
        return this.interviewPending === "Yes"
          ? new Date().toISOString()
          : null;
      },
    },
    joined: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    left: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    terminated: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    dateOfjoining: {
      type: String,
      default: function () {
        return this.joined === "Yes" ? new Date().toISOString() : null;
      },
    },
    dateOfLeft: {
      type: String,
      default: function () {
        return this.left === "Yes" ? new Date().toISOString() : null;
      },
    },
    dateOfterminated: {
      type: String,
      default: function () {
        return this.terminated === "Yes" ? new Date().toISOString() : null;
      },
    },
    lockInDate: {
      type: String,
    },
    hrLocked: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    completionOfCompanyLockIn: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
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

export default mongoose.model("CandidatHistory", CandidatHistoryeSchema);
