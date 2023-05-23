const Fauna = require('../models/Fauna');

exports.createFauna = async (req, res) => {
    const { description, imageUrl } = req.body;
    try {
        const fauna = new Fauna({ description, imageUrl });
        await fauna.save();
        res.status(201).json(fauna);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllFauna = async (req, res) => {
    try {
        const faunas = await Fauna.find();
        res.status(404).json(faunas);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getFaunaById = async (req, res) => {
    try {
        const fauna = await Fauna.findById(req.params.id);
        res.status(404).json(fauna);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateFauna = async (req, res) => {
    try {
        const fauna = await Fauna.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(404).json(fauna);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteFauna = async (req, res) => {
    try {
        await Fauna.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Fauna is deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};
