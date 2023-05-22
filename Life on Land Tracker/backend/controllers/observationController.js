const Observation = require('../models/Observation');

exports.createObservation = async (req, res) => {
    const { name, scientificName, description, speciesType, imageUrl } = req.body;
    try {
        const observation = new Observation({ name, scientificName, description, speciesType, imageUrl });
        await observation.save();
        res.status(201).json(observation);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllObservations = async (req, res) => {
    try {
        const observations = await Observation.find();
        res.status(200).json(observations);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getObservationById = async (req, res) => {
    try {
        const observation = await Observation.findById(req.params.id);
        res.status(200).json(observation);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateObservation = async (req, res) => {
    try {
        const observation = await Observation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(observation);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteObservation = async (req, res) => {
    try {
        await Observation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Observation deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};
