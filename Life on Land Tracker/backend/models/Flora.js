const mongoose = require('mongoose');

const FloraSchema = new mongoose.Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Flora', FloraSchema);
