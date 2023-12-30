import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      enum: ["Director", "Manager", "Team_leader"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
