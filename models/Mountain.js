const mongoose = require('mongoose');

const mountainSchema = new mongoose.Schema({
    mountainName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slopes: [{
        slopeName: {
            type: String
        },
        isOpen: {
            type: Boolean
        },
        skillLevel: {
            type: String
        },
        length: {
            type: Number
        }
    }]
});

module.exports = mongoose.model('Mountain', mountainSchema);