import { Request, Response } from "express";
import { BookingService } from "./booking.service";

export class BookingController {
  private bookingService = new BookingService();

  public async bookClass(req: Request, res: Response) {
    const { scheduleId } = req.body;
    const traineeId = req.userId; // Assuming you attach userId to req after JWT authentication
    try {
      const updatedSchedule = await this.bookingService.bookClass(
        scheduleId,
        traineeId
      );
      res.status(201).json({
        success: true,
        message: "Class booked successfully",
        data: updatedSchedule,
      });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  public async cancelBooking(req: Request, res: Response) {
    const { scheduleId } = req.body;
    const traineeId = req.userId;
    try {
      const updatedSchedule = await this.bookingService.cancelBooking(
        scheduleId,
        traineeId
      );
      res.status(200).json({
        success: true,
        message: "Booking cancelled successfully",
        data: updatedSchedule,
      });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}
