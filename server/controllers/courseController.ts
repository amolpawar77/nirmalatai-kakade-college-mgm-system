import { Request, Response } from 'express';
import Course from '../models/Course';

export const getCourses = async (req: Request, res: Response) => {
  const courses = await Course.find({});
  res.json(courses);
};

export const createCourse = async (req: Request, res: Response) => {
  const { name, subjects, duration, description } = req.body;

  const course = new Course({
    name,
    subjects,
    duration,
    description,
  });

  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
};

export const updateCourse = async (req: Request, res: Response) => {
  const { name, subjects, duration, description } = req.body;

  const course = await Course.findById(req.params.id);

  if (course) {
    course.name = name || course.name;
    course.subjects = subjects || course.subjects;
    course.duration = duration || course.duration;
    course.description = description || course.description;

    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    await course.deleteOne();
    res.json({ message: 'Course removed' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
};
