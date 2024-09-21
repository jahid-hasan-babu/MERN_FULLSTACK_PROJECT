import { Schema, model, Document } from "mongoose";

// Define the interface for the ClassSchedule document
export interface IClassSchedule extends Document {
  trainerId: Schema.Types.ObjectId; // Reference to Trainer
  date: Date;
  startTime: Date;
  endTime: Date;
  trainees: Schema.Types.ObjectId[]; // Array of User references
  maxTrainees?: number; // Optional field, defaults to 10
}

// Create the ClassSchedule schema
const ClassScheduleSchema = new Schema<IClassSchedule>(
  {
    trainerId: { type: Schema.Types.ObjectId, ref: "Trainer", required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    trainees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    maxTrainees: { type: Number, default: 10 },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt fields
    versionKey: false, // Optional: disable __v field
  }
);

// Export the model
export default model<IClassSchedule>("ClassSchedule", ClassScheduleSchema);
