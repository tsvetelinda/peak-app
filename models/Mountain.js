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
    slopes: {
        type: mongoose.Types.ObjectId,
        ref: 'Slope'
    }
});

module.exports = mongoose.model('Mountain', mountainSchema);