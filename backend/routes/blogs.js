const express = require("express");
const Blog = require("../models/blog");
const { handleBlogCreation, handleBlogDeletion, handleBlogUpdation } = require("../controllers/blog");

const router = express.Router();

router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving blogs' });
    }
});

router.post("/create", handleBlogCreation);
router.delete("/delete/:id", handleBlogDeletion);
router.put("/update/:id", handleBlogUpdation);

module.exports = router;
