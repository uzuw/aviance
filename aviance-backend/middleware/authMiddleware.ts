import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

export interface AuthRequest extends Request {
  user?: any;
}

const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default protect;
