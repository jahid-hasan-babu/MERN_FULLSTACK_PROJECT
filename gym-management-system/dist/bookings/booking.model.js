"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookingSchema = new mongoose_1.Schema({
    traineeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    scheduleId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "ClassSchedule",
        required: true,
    },
    bookingTime: { type: Date, default: Date.now },
}, { timestamps: true, versionKey: false } // Automatically manage createdAt and updatedAt
);
exports.default = (0, mongoose_1.model)("Booking", BookingSchema);
