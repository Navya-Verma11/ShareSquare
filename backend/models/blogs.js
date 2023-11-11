const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    blogName: {
        type: String,
        required: true,
    },
    
    author: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },
    
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Blog = mongoose.model('blog', blogsSchema);
module.exports = Blog;
