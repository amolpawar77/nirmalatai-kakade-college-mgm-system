import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  email: { type: String, required: true },
  phone: { type: String },
  batch: { type: String },
}, { timestamps: true });

export default mongoose.models.Student || mongoose.model('Student', studentSchema);
