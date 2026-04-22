import { Request, Response } from 'express';
import Student from '../models/Student';

export const getStudents = async (req: Request, res: Response) => {
  const students = await Student.find({}).populate('course', 'name');
  res.json(students);
};

export const createStudent = async (req: Request, res: Response) => {
  const { name, rollNumber, course, email, phone, batch } = req.body;

  const student = new Student({
    name,
    rollNumber,
    course,
    email,
    phone,
    batch
  });

  const createdStudent = await student.save();
  res.status(201).json(createdStudent);
};

export const updateStudent = async (req: Request, res: Response) => {
  const student = await Student.findById(req.params.id);

  if (student) {
    student.name = req.body.name || student.name;
    student.rollNumber = req.body.rollNumber || student.rollNumber;
    student.course = req.body.course || student.course;
    student.email = req.body.email || student.email;
    student.phone = req.body.phone || student.phone;
    student.batch = req.body.batch || student.batch;

    const updatedStudent = await student.save();
    res.json(updatedStudent);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
};
