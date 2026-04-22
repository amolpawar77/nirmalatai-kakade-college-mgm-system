import express from 'express';
import next from 'next';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './server/config/db';

// Import Routes
import authRoutes from './server/routes/authRoutes';
import blogRoutes from './server/routes/blogRoutes';
import courseRoutes from './server/routes/courseRoutes';
import staffRoutes from './server/routes/staffRoutes';
import studentRoutes from './server/routes/studentRoutes';
import placementRoutes from './server/routes/placementRoutes';

// Import Models for Stats
import Student from './server/models/Student';
import Staff from './server/models/Staff';
import Course from './server/models/Course';
import Blog from './server/models/Blog';
import { protect, admin } from './server/middleware/authMiddleware';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = process.env.PORT || 3000;

nextApp.prepare().then(async () => {
  const server = express();

  // Connect to Database
  try {
    if (process.env.MONGO_URI) {
      await connectDB();
    }
  } catch (err) {
    console.error('Database connection failed:', err);
  }

  server.use(cors());
  server.use(express.json());

  // Static folder for uploads
  server.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

  // API Routes
  server.use('/api/auth', authRoutes);
  server.use('/api/blogs', blogRoutes);
  server.use('/api/courses', courseRoutes);
  server.use('/api/staff', staffRoutes);
  server.use('/api/students', studentRoutes);
  server.use('/api/placements', placementRoutes);

  // Dashboard Stats API
  server.get('/api/dashboard/stats', protect, admin, async (req, res) => {
    try {
      const totalStudents = await Student.countDocuments();
      const totalStaff = await Staff.countDocuments();
      const totalCourses = await Course.countDocuments();
      const totalBlogs = await Blog.countDocuments();

      res.json({
        totalStudents,
        totalStaff,
        totalCourses,
        totalBlogs
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching stats' });
    }
  });

  // Health check API
  server.get('/api/health', (req, res) => {
    res.json({
      status: 'Admin Panel API is active',
      database: process.env.MONGO_URI ? 'Configured' : 'Missing MONGO_URI'
    });
  });

  // Fallback to Next.js handler
  server.all('/{*path}', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Server active on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
});
