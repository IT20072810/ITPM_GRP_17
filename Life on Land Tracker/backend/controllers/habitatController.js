const Habitat = require('../models/Habitat');

exports.createHabitat = async (req, res) => {
    const { name, location, climate, imageUrl } = req.body;
    try {
        const habitat = new Habitat({ name, location, climate, imageUrl });
        await habitat.save();
        res.status(201).json(habitat);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllHabitats = async (req, res) => {
    try {
        const habitats = await Habitat.find();
        res.status(200).json(habitats);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getHabitatById = async (req, res) => {
    try {
        const habitat = await Habitat.findById(req.params.id);
        res.status(200).json(habitat);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateHabitat = async (req, res) => {
    try {
        const habitat = await Habitat.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(habitat);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteHabitat = async (req, res) => {
    try {
        await Habitat.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Habitat deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};
