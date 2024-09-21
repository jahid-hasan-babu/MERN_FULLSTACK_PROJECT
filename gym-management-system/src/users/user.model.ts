import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

// Define an interface for the User document
export interface IUser extends Document {
  username: string;
  email: string;
  password: any; // Using 'any' for the password field
  role: "admin" | "trainer" | "trainee";
  comparePassword(password: any): Promise<boolean>; // Using 'any' for the comparePassword method argument
}

// Create the User schema
const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "trainer", "trainee"],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Hash the password before saving the user document
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = function (
  password: any
): Promise<boolean> {
  // Using 'any' here
  return bcrypt.compare(password, this.password);
};

// Export the model with the correct typing
export default model<IUser>("User", UserSchema);
