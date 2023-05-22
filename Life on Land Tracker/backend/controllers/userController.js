const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser =  async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            
        });

        // Save the user to the database
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Failed to register user', error);
        return res.status(500).json({ message: 'Failed to register user' });
    }
}

// Login
exports.loginUser =  async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // if (!isPasswordValid) {
        //     return res.status(401).json({ message: 'Invalid email or password' });
        // }

        // Generate a JSON Web Token (JWT)
        const token = jwt.sign({ userId: user._id }, 'superencryptedsecret');

        return res.json({ token, user });
    } catch (error) {
        console.error('Failed to login', error);
        return res.status(500).json({ message: 'Failed to login' });
    }
}

// Additional operations like updateUser, deleteUser etc. can be added here
exports.updateUser = async (req, res) => {
    const { email, username } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { email, username },
            { new: true }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};
