import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewProfile: String,
    impressions: String,
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("users", UserSchema);
export default User;
