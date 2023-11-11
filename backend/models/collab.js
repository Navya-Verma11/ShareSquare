const mongoose = require('mongoose');

const collabSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
   
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Collab = mongoose.model('collab', collabSchema);
module.exports = Collab;
