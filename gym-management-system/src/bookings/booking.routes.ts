import { Router } from "express";
import { bookClass, cancelBooking } from "./booking.controller";
import { protect } from "../middleware/authMiddleware"; // Assuming protect middleware is in place

const router = Router();

// Route to book a class
router.post("/book", protect, bookClass);

// Route to cancel a booking
router.delete("/cancel/:bookingId", protect, cancelBooking);

export default router;
