"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Create the Trainer schema with timestamps and versionKey options
const TrainerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Add password field
    specialization: { type: String, required: true },
}, { timestamps: true, versionKey: false } // Enable timestamps and disable versionKey
);
exports.default = (0, mongoose_1.model)("Trainer", TrainerSchema);
