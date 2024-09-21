import Booking, { IBooking } from "./booking.model";
import ClassSchedule from "../classSchedule/class.model"; // Assuming this exists
import { Types } from "mongoose";

interface IBookClassInput {
  traineeId: Types.ObjectId;
  scheduleId: Types.ObjectId;
}

class BookingService {
  // Method to create a booking
  async bookClass(data: IBookClassInput): Promise<IBooking> {
    // Find the class schedule
    const schedule = await ClassSchedule.findById(data.scheduleId);
    if (!schedule) {
      throw new Error("Class schedule not found.");
    }

    // Check if the class schedule has available slots
    if (schedule.trainees.length >= schedule.maxTrainees) {
      throw new Error("No available slots in this class.");
    }

    // Add trainee to the schedule
    schedule.trainees.push(traineeId as any);

    await schedule.save();

    // Create a new booking document
    const booking = new Booking({
      traineeId: data.traineeId,
      scheduleId: data.scheduleId,
      bookingTime: new Date(),
    });

    return await booking.save(); // Save and return the booking
  }

  // Method to cancel a booking
  async cancelBooking(bookingId: Types.ObjectId): Promise<void> {
    // Find the booking by its ID
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found.");
    }

    // Find the class schedule associated with the booking
    const schedule = await ClassSchedule.findById(booking.scheduleId);
    if (schedule) {
      // Remove the trainee from the class schedule
      schedule.trainees = schedule.trainees.filter(
        (traineeId) => !traineeId.equals(booking.traineeId)
      );
      await schedule.save(); // Save the updated schedule
    }

    // Delete the booking from the database
    await Booking.findByIdAndDelete(bookingId);
  }
}

export default new BookingService();
