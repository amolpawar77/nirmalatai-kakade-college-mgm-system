import { Request, Response } from 'express';
import Blog from '../models/Blog';

export const getBlogs = async (req: Request, res: Response) => {
  const blogs = await Blog.find({}).populate('author', 'name');
  res.json(blogs);
};

export const createBlog = async (req: Request, res: Response) => {
  const { title, content, status } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  const blog = new Blog({
    title,
    content,
    image,
    status,
    author: (req as any).user._id
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
};

export const updateBlog = async (req: Request, res: Response) => {
  const { title, content, status } = req.body;
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.status = status || blog.status;
    if (req.file) {
      blog.image = `/uploads/${req.file.filename}`;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.deleteOne();
    res.json({ message: 'Blog removed' });
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};
