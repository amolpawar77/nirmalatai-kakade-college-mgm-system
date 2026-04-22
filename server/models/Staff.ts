import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Present', 'Absent'], default: 'Present' },
  activityLog: { type: String }
});

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  department: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  attendance: [attendanceSchema]
}, { timestamps: true });

export default mongoose.models.Staff || mongoose.model('Staff', staffSchema);
