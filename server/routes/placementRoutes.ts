import express from 'express';
import { getPlacements, createPlacement } from '../controllers/placementController';
import { protect, admin } from '../middleware/authMiddleware';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

router.get('/', getPlacements);
router.post('/', protect, admin, upload.single('photo'), createPlacement);

export default router;
