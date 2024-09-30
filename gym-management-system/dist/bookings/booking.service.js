"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const booking_model_1 = require("./booking.model");
class BookingService {
    async bookClass(scheduleId, traineeId) {
        const schedule = await booking_model_1.Schedule.findById(scheduleId);
        if (!schedule)
            throw new Error("Schedule not found");
        if (schedule.bookedSlots >= schedule.maxSlots) {
            throw new Error("Class schedule is full. Maximum 10 trainees allowed per schedule.");
        }
        const hasBooking = await booking_model_1.Schedule.findOne({
            trainees: traineeId,
            date: schedule.date,
            timeSlot: schedule.timeSlot,
        });
        if (hasBooking) {
            throw new Error("Userhas already booked a class in this time slot.");
        }
        schedule.trainees.push(traineeId);
        schedule.bookedSlots += 1;
        await schedule.save();
        return schedule;
    }
    async cancelBooking(scheduleId, traineeId) {
        const schedule = await booking_model_1.Schedule.findById(scheduleId);
        if (!schedule)
            throw new Error("Schedule not found");
        const traineeIndex = schedule.trainees.indexOf(traineeId);
        if (traineeIndex === -1) {
            throw new Error("Trainee has no booking for this class.");
        }
        schedule.trainees.splice(traineeIndex, 1);
        schedule.bookedSlots -= 1;
        await schedule.save();
        return schedule;
    }
}
exports.BookingService = BookingService;
