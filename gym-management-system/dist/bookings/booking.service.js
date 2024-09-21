"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_model_1 = __importDefault(require("./booking.model"));
const class_model_1 = __importDefault(require("../classSchedule/class.model")); // Assuming this exists
class BookingService {
    // Method to create a booking
    async bookClass(data) {
        // Find the class schedule
        const schedule = await class_model_1.default.findById(data.scheduleId);
        if (!schedule) {
            throw new Error("Class schedule not found.");
        }
        // Check if the class schedule has available slots
        if (schedule.trainees.length >= schedule.maxTrainees) {
            throw new Error("No available slots in this class.");
        }
        // Add trainee to the schedule
        schedule.trainees.push(traineeId);
        await schedule.save();
        // Create a new booking document
        const booking = new booking_model_1.default({
            traineeId: data.traineeId,
            scheduleId: data.scheduleId,
            bookingTime: new Date(),
        });
        return await booking.save(); // Save and return the booking
    }
    // Method to cancel a booking
    async cancelBooking(bookingId) {
        // Find the booking by its ID
        const booking = await booking_model_1.default.findById(bookingId);
        if (!booking) {
            throw new Error("Booking not found.");
        }
        // Find the class schedule associated with the booking
        const schedule = await class_model_1.default.findById(booking.scheduleId);
        if (schedule) {
            // Remove the trainee from the class schedule
            schedule.trainees = schedule.trainees.filter((traineeId) => !traineeId.equals(booking.traineeId));
            await schedule.save(); // Save the updated schedule
        }
        // Delete the booking from the database
        await booking_model_1.default.findByIdAndDelete(bookingId);
    }
}
exports.default = new BookingService();
