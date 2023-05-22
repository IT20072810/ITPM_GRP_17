const mongoose = require('mongoose');

const FaunaSchema = new mongoose.Schema({
    description: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Fauna', FaunaSchema);
