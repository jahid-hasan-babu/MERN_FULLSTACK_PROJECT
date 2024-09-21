import ClassSchedule, { IClassSchedule } from "./class.model";
import { ITrainer } from "../trainers/trainers.model";
import { IUser } from "../users/user.model";

class ClassService {
  async createSchedule(data: IClassSchedule): Promise<IClassSchedule> {
    const schedule = new ClassSchedule(data);
    return await schedule.save();
  }

  async updateSchedule(
    id: string,
    data: Partial<IClassSchedule>
  ): Promise<IClassSchedule | null> {
    return await ClassSchedule.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteSchedule(id: string): Promise<IClassSchedule | null> {
    return await ClassSchedule.findByIdAndDelete(id); // Use findByIdAndDelete
  }

  // Method to get classes based on user type
  async getClassesByUser(
    userId: string,
    userRole: string
  ): Promise<IClassSchedule[]> {
    if (!userId) {
      throw new Error("User is not authenticated");
    }

    // If the user is an admin, return all classes
    if (userRole === "admin") {
      return await ClassSchedule.find(); // Admin can see all schedules
    }

    // Trainers and trainees can see only their classes
    return await ClassSchedule.find({
      $or: [
        { trainerId: userId }, // Classes created by the trainer
        { trainees: userId }, // Classes they are enrolled in
      ],
    });
  }
  async getScheduleById(id: string): Promise<IClassSchedule | null> {
    return await ClassSchedule.findById(id);
  }
}

export default new ClassService();
