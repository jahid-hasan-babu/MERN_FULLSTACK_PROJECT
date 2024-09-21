import { Request, Response } from "express";
import BookingService from "./booking.service";
import { Types } from "mongoose";

export const bookClass = async (req: Request, res: Response) => {
  const { traineeId, scheduleId } = req.body;

  try {
    const booking = await BookingService.bookClass({
      traineeId: new Types.ObjectId(traineeId),
      scheduleId: new Types.ObjectId(scheduleId),
    });
    res.status(201).json({ success: true, booking });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  try {
    const id = new Types.ObjectId(bookingId); // Ensure valid ObjectId conversion
    await BookingService.cancelBooking(id);
    res
      .status(200)
      .json({ success: true, message: "Booking canceled successfully." });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
