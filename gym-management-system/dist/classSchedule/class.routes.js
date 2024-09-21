"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const class_controller_1 = require("./class.controller"); // Adjust the import path as necessary
const authMiddleware_1 = require("../middleware/authMiddleware"); // Ensure you have middleware for authentication
const router = (0, express_1.Router)();
router.get("/classes", authMiddleware_1.protect, class_controller_1.getClasses); // Assuming you have protect middleware to check user roles
// Create a class schedule
router.post("/create-class", authMiddleware_1.protect, authMiddleware_1.adminOnly, class_controller_1.createClassSchedule);
// Update a class schedule
router.patch("/update-class/:id", authMiddleware_1.protect, authMiddleware_1.adminOnly, class_controller_1.updateClassSchedule);
// Delete a class schedule
router.delete("/delete-class/:id", authMiddleware_1.protect, authMiddleware_1.adminOnly, class_controller_1.deleteClassSchedule);
// Get a single class schedule by ID
router.get("/single-class/:id", authMiddleware_1.protect, authMiddleware_1.adminOnly, class_controller_1.getClassScheduleById);
exports.default = router;
