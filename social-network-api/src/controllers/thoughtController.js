const { Thought, User } = require('../models');

// Create a new thought
const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
        res.status(201).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Get all thoughts
const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find().populate('reactions');
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get a thought by ID
const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId).populate('reactions');
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Update a thought
const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Delete a thought
const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    createThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
};