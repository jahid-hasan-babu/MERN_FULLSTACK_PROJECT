"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const authMiddleware_1 = require("../middleware/authMiddleware"); // Assuming protect middleware is in place
const router = (0, express_1.Router)();
// Route to book a class
router.post("/book", authMiddleware_1.protect, booking_controller_1.bookClass);
// Route to cancel a booking
router.delete("/cancel/:bookingId", authMiddleware_1.protect, booking_controller_1.cancelBooking);
exports.default = router;
