import express from 'express';
import { getStudents, createStudent, updateStudent } from '../controllers/studentController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', protect, admin, getStudents);
router.post('/', protect, admin, createStudent);
router.put('/:id', protect, admin, updateStudent);

export default router;
