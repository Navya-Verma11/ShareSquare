const { getUser } = require("../services/auth");
const Blog = require("../models/blog");
const mongoose = require("mongoose");

async function handleBlogCreation(req, res) {
  try {
    const { blogName, author, content } = req.body;

    const newBlog = await Blog.create({
      blogName,
      author,
      content,
      createdBy: req.user.id,
    });

    return res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({ error: 'Failed to create blog' });
  }
}

async function handleBlogDeletion(req, res) {
  const blogId = req.params.id;

  try {
    await Blog.findByIdAndDelete(blogId);
    res.status(204).send("Blog deleted successfully");
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
}

async function handleBlogUpdation(req, res) {
  const blogId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updatedData, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
}

async function getBlogById(req, res) {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error('Error retrieving blog:', error);
    res.status(500).json({ error: 'Failed to retrieve blog' });
  }
}

module.exports = {
  handleBlogCreation,
  handleBlogDeletion,
  handleBlogUpdation,
  getBlogById,
};
