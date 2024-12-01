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
        type: mongoose.Types.ObjectId,
        ref: 'Slope'
    }]
});

module.exports = mongoose.model('Mountain', mountainSchema);

/*
mountainName: 'Родопи',
imageUrl: 'rodopi-page.png',
description: 'В Родопите зимата оживява! С разнообразие от писти и чудесни условия, тук наклонът винаги е към забавлението!',
slopes: [please, fill in 5]

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
        */
