import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
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
      enum: [
        "Director",
         "Manager"
        ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
