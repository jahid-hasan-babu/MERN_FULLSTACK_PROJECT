import { Schema, model, Document } from "mongoose";

// Define the interface for the Trainer document
export interface ITrainer extends Document {
  name: string;
  email: string;
  password: string; // Add password field
  specialization: string;
}

// Create the Trainer schema with timestamps and versionKey options
const TrainerSchema = new Schema<ITrainer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Add password field
    specialization: { type: String, required: true },
  },
  { timestamps: true, versionKey: false } // Enable timestamps and disable versionKey
);

export default model<ITrainer>("Trainer", TrainerSchema);
