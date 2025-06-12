import express from 'express';
import { createAirplane, getAirplanes } from '../controllers/airplaneControllers';
import protect from '../middleware/authMiddleware';

const router = express.Router();

// Public: View airplanes
router.get('/', getAirplanes);

// Protected: Create airplane (only for logged-in users)
router.post('/', protect, createAirplane);

export default router;
