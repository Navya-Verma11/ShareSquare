const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
    opportunityName: {
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },
    
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Opportunity = mongoose.model('opportunity', opportunitySchema);
module.exports = Opportunity;
