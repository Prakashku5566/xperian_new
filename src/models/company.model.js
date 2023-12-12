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
      required: true,
    },
    websiteURL: {
      type: String,
      required: true,
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
    gst: {
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
    opsContact: {
      type: String,
      
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
    internationalBpo: {
      type: String,
      required: true,
    },
    sift1: {
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
    Address: {
      type: String,
      required: true,
    },
    callProcess: {
      type: String,
      enum:[ 
        "Meta/English",
        "PPC/English",
        "Meta/Spanish",
        "PPC/Spanish",
        "bilingual",
      ],
      required: true,
    },
    // shiftTiming: {
    //   type: String,
    //   required: true,
    // },
    workingDays: {
      type: Number,
      required: true,
    },
    // TODO :ADD Boolean here
    weeklyOff: {
      type: Number,
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
      enum: [
       "yes",
       "no",
       "included",
       "depends on route"
      ],
      required: true,
    },
  
    meals: {
      type: String,
      enum: [
       "yes",
       "no",
       "included"
      ],
      required: true,
    },
    
    interviewProcess: {
      type: String,
      enum: [
       "face to face",
       "telephonic"
      ],
      required: true,
    },
    interviewTiming: {
      type:String,
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

export default mongoose.model("Company", CompanySchema);
