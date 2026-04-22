import { Request, Response } from 'express';
import Placement from '../models/Placement';

export const getPlacements = async (req: Request, res: Response) => {
  const placements = await Placement.find({});
  res.json(placements);
};

export const createPlacement = async (req: Request, res: Response) => {
  const { studentName, company, package: pkg, role, year } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : '';

  const placement = new Placement({
    studentName,
    company,
    photo,
    package: pkg,
    role,
    year
  });

  const createdPlacement = await placement.save();
  res.status(201).json(createdPlacement);
};
