import { Request, Response } from 'express';
import Airplane from '../models/Airplane';
import { AuthRequest } from '../middleware/authMiddleware';

export const createAirplane = async (req: AuthRequest, res: Response) => {
  const {
    title,
    aircraftModel,
    engineType,
    year,
    price,
    description,
    manufacturer,
    hoursFlown,
  } = req.body;

  try {
    const airplane = new Airplane({
      title,
      aircraftModel,
      engineType,
      year,
      price,
      description,
      manufacturer,
      hoursFlown,
      seller: req.user._id,
    });

    const saved = await airplane.save();
    res.status(201).json(saved);
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation failed',
        errors: err.errors,
      });
    }
    res.status(500).json({
      message: 'Failed to create airplane',
      error: err,
    });
  }
};

export const getAirplanes = async (_req: Request, res: Response) => {
  try {
    const airplanes = await Airplane.find().populate('seller', 'name email');
    res.status(200).json(airplanes);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to get airplanes',
      error: err,
    });
  }
};
