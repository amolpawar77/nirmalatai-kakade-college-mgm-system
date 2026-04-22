import { Request, Response } from 'express';
import Staff from '../models/Staff';

export const getStaff = async (req: Request, res: Response) => {
  const staff = await Staff.find({});
  res.json(staff);
};

export const createStaff = async (req: Request, res: Response) => {
  const { name, department, role, email, phone } = req.body;
  const photo = req.file ? `/uploads/${req.file.filename}` : '';

  const staff = new Staff({
    name,
    photo,
    department,
    role,
    email,
    phone
  });

  const createdStaff = await staff.save();
  res.status(201).json(createdStaff);
};

export const updateStaff = async (req: Request, res: Response) => {
  const staff = await Staff.findById(req.params.id);

  if (staff) {
    staff.name = req.body.name || staff.name;
    staff.department = req.body.department || staff.department;
    staff.role = req.body.role || staff.role;
    staff.email = req.body.email || staff.email;
    staff.phone = req.body.phone || staff.phone;
    if (req.file) {
      staff.photo = `/uploads/${req.file.filename}`;
    }

    const updatedStaff = await staff.save();
    res.json(updatedStaff);
  } else {
    res.status(404).json({ message: 'Staff not found' });
  }
};

export const trackAttendance = async (req: Request, res: Response) => {
  const { status, activityLog } = req.body;
  const staff = await Staff.findById(req.params.id);

  if (staff) {
    staff.attendance.push({ status, activityLog, date: new Date() });
    await staff.save();
    res.json({ message: 'Attendance tracked' });
  } else {
    res.status(404).json({ message: 'Staff not found' });
  }
};
