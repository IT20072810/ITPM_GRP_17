const Flora = require('../models/Flora');

exports.createFlora = async (req, res) => {
    const { name, scientificName, description, imageUrl } = req.body;
    try {
        const flora = new Flora({ name, scientificName, description, imageUrl });
        await flora.save();
        res.status(201).json(flora);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllFlora = async (req, res) => {
    try {
        const floras = await Flora.find();
        res.status(200).json(floras);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getFloraById = async (req, res) => {
    try {
        const flora = await Flora.findById(req.params.id);
        res.status(200).json(flora);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateFlora = async (req, res) => {
    try {
        const flora = await Flora.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(flora);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteFlora = async (req, res) => {
    try {
        await Flora.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Flora deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};
