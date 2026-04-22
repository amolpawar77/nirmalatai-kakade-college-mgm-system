import mongoose from 'mongoose';

const placementSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  photo: { type: String },
  company: { type: String, required: true },
  package: { type: String },
  role: { type: String },
  year: { type: String },
}, { timestamps: true });

export default mongoose.models.Placement || mongoose.model('Placement', placementSchema);
