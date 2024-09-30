import { Schedule } from './booking.model';
import { User } from '../users/user.model'; // Adjusted import to use User model

export class BookingService {
    async bookClass(scheduleId: string, userId: string) {
        const schedule = await Schedule.findById(scheduleId);
        if (!schedule) throw new Error('Schedule not found');

        if (schedule.bookedSlots >= schedule.maxSlots) {
            throw new Error('Class schedule is full. Maximum 10 trainees allowed per schedule.');
        }

        // Check if the user has a booking for the same time slot
        const hasBooking = await Schedule.findOne({
            trainees: userId,
            date: schedule.date,
            timeSlot: schedule.timeSlot,
        });

        if (hasBooking) {
            throw new Error('User has already booked a class in this time slot.');
        }

        // Add user to the schedule and increment booked slots
        schedule.trainees.push(userId);
        schedule.bookedSlots += 1;
        await schedule.save();

        return schedule;
    }

    async cancelBooking(scheduleId: string, userId: string) {
        const schedule = await Schedule.findById(scheduleId);
        if (!schedule) throw new Error('Schedule not found');

        const userIndex = schedule.trainees.indexOf(userId);
        if (userIndex === -1) {
            throw new Error('User has no booking for this class.');
        }

        // Remove user from the schedule and decrement booked slots
        schedule.trainees.splice(userIndex, 1);
        schedule.bookedSlots -= 1;
        await schedule.save();

        return schedule;
    }
}
