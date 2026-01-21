const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tech_stack: {
        type: [String], // Array of strings
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    demo_link: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Project', projectSchema);
