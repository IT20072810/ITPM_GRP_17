const mongoose = require('mongoose');

const ObservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    description: { type: String, required: true },
    speciesType: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Observation', ObservationSchema);
