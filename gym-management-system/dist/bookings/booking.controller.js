"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelBooking = exports.bookClass = void 0;
const booking_service_1 = __importDefault(require("./booking.service"));
const mongoose_1 = require("mongoose");
const bookClass = async (req, res) => {
    const { traineeId, scheduleId } = req.body;
    try {
        const booking = await booking_service_1.default.bookClass({
            traineeId: new mongoose_1.Types.ObjectId(traineeId),
            scheduleId: new mongoose_1.Types.ObjectId(scheduleId),
        });
        res.status(201).json({ success: true, booking });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.bookClass = bookClass;
const cancelBooking = async (req, res) => {
    const { bookingId } = req.params;
    try {
        const id = new mongoose_1.Types.ObjectId(bookingId); // Ensure valid ObjectId conversion
        await booking_service_1.default.cancelBooking(id);
        res
            .status(200)
            .json({ success: true, message: "Booking canceled successfully." });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.cancelBooking = cancelBooking;
