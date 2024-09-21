"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_model_1 = __importDefault(require("./class.model"));
class ClassService {
    async createSchedule(data) {
        const schedule = new class_model_1.default(data);
        return await schedule.save();
    }
    async updateSchedule(id, data) {
        return await class_model_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteSchedule(id) {
        return await class_model_1.default.findByIdAndDelete(id); // Use findByIdAndDelete
    }
    // Method to get classes based on user type
    async getClassesByUser(userId, userRole) {
        if (!userId) {
            throw new Error("User is not authenticated");
        }
        // If the user is an admin, return all classes
        if (userRole === "admin") {
            return await class_model_1.default.find(); // Admin can see all schedules
        }
        // Trainers and trainees can see only their classes
        return await class_model_1.default.find({
            $or: [
                { trainerId: userId }, // Classes created by the trainer
                { trainees: userId }, // Classes they are enrolled in
            ],
        });
    }
    async getScheduleById(id) {
        return await class_model_1.default.findById(id);
    }
}
exports.default = new ClassService();
