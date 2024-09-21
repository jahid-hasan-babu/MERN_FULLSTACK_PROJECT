import { Router } from "express";
import {
  createClassSchedule,
  updateClassSchedule,
  deleteClassSchedule,
  getClasses,
  getClassScheduleById,
} from "./class.controller"; // Adjust the import path as necessary
import { protect, adminOnly } from "../middleware/authMiddleware"; // Ensure you have middleware for authentication

const router = Router();

router.get("/classes", protect, getClasses); // Assuming you have protect middleware to check user roles

// Create a class schedule
router.post("/create-class", protect, adminOnly, createClassSchedule);

// Update a class schedule
router.patch("/update-class/:id", protect, adminOnly, updateClassSchedule);

// Delete a class schedule
router.delete("/delete-class/:id", protect, adminOnly, deleteClassSchedule);

// Get a single class schedule by ID
router.get("/single-class/:id", protect, adminOnly, getClassScheduleById);

export default router;
