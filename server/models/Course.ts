import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g. BA, BCom
  subjects: [{ type: String }],
  duration: { type: String },
  description: { type: String },
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', courseSchema);
