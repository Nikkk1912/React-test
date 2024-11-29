const express = require('express');
const userModel = require('./models/users');

const endPointMongo = express.Router();

// POST
endPointMongo.post('/users', async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Error while creating user", error: error.message });
    }
});

// GET
endPointMongo.get('/users', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error getting users", error: error.message });
    }
});

// PUT
endPointMongo.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const updateUserData = req.body;

    try {
        const updateUser = await userModel.findByIdAndUpdate(userId, updateUserData, { new: true});
        if (!updateUser) {
            return res.status(404).json({ message: "No such user with id: " + userId});
        }

        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ message: "Error while updating user", error: error.message });
    }
});

// DELETE
endPointMongo.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: "No such user with id: " + userId });
        }

        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting user", error: error.message })
    }
});

module.exports = endPointMongo;