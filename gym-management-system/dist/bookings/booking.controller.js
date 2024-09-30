"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const booking_service_1 = require("./booking.service");
class BookingController {
    constructor() {
        this.bookingService = new booking_service_1.BookingService();
    }
    async bookClass(req, res) {
        const { scheduleId } = req.body;
        const traineeId = req.userId; // Assuming you attach userId to req after JWT authentication
        try {
            const updatedSchedule = await this.bookingService.bookClass(scheduleId, traineeId);
            res.status(201).json({
                success: true,
                message: "Class booked successfully",
                data: updatedSchedule,
            });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    async cancelBooking(req, res) {
        const { scheduleId } = req.body;
        const traineeId = req.userId;
        try {
            const updatedSchedule = await this.bookingService.cancelBooking(scheduleId, traineeId);
            res.status(200).json({
                success: true,
                message: "Booking cancelled successfully",
                data: updatedSchedule,
            });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
exports.BookingController = BookingController;
