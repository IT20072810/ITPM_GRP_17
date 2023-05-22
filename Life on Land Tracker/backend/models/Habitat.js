const mongoose = require('mongoose');

const HabitatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    climate: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Habitat', HabitatSchema);
