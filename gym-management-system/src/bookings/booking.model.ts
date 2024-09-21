import { Schema, model, Document } from "mongoose";

export interface IBooking extends Document {
  traineeId: Schema.Types.ObjectId; // ObjectId type for reference
  scheduleId: Schema.Types.ObjectId;
  bookingTime: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    traineeId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    scheduleId: {
      type: Schema.Types.ObjectId,
      ref: "ClassSchedule",
      required: true,
    },
    bookingTime: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false } // Automatically manage createdAt and updatedAt
);

export default model<IBooking>("Booking", BookingSchema);
