import mongoose from "mongoose";
const CompanySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    gpsLocation: {
      type: String,
      // required: true,
    },
    websiteURL: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    ownerNumber: {
      type: Number,
      required: true,
    },
    gstIn: {
      type: String,
      required: true,
      unique: true,
    },
    hrName: {
      type: String,
      required: true,
    },
    hrNumber: {
      type: String,
      required: true,
    },
    opsManager: {
      type: String,
    },
    opsContactNo: {
      type: Number,
    },
    payOut: {
      type: String,
      required: true,
    },
    seatingCapacity: {
      type: Number,
      required: true,
    },
    currentHeadcount: {
      type: Number,
      required: true,
    },
    typeOfBpo: {
      type: String,
      enum: ["International", "Domestic"],
      required: true,
    },
    shift1: {
      type: String,
      required: true,
    },
    sift2: {
      type: String,
    },
    sift3: {
      type: String,
    },
    companyAging: {
      type: String,
      required: true,
    },
    lockinPeriod: {
      type: String,
      required: true,
    },
    HiringRequierments: {
      type: String,
      required: true,
    },

    callProcess: {
      type: String,
      enum: [
        "Meta/English",
        "PPC/English",
        "Meta/Spanish",
        "PPC/Spanish",
        "bilingual",
        "French",
      ],
      required: true,
    },
    workingDays: {
      type: String,
      required: true,
    },
    weeklyOff: {
      type: String,
      required: true,
    },
    otherCities: {
      type: String,
    },
    salaryBracket: {
      type: String,
      required: true,
    },

    cab: {
      type: String,
      enum: ["Yes", "No", "Included", "Depends on route"],
      required: true,
    },

    meals: {
      type: String,
      enum: ["Yes", "No", "Included"],
      required: true,
    },

    interviewProcess: {
      type: String,
      enum: ["Face to face", "Telephonic", "Telephonic and Face to face Both"],
      required: true,
    },
    interviewTiming: {
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

export default mongoose.model("Company", CompanySchema);
