import express from 'express';
import { getStaff, createStaff, updateStaff, trackAttendance } from '../controllers/staffController';
import { protect, admin } from '../middleware/authMiddleware';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

router.get('/', protect, admin, getStaff);
router.post('/', protect, admin, upload.single('photo'), createStaff);
router.put('/:id', protect, admin, upload.single('photo'), updateStaff);
router.post('/:id/attendance', protect, admin, trackAttendance);

export default router;
