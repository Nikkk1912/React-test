const express = require('express');
const userModel = require('./models/users');

const endPoint = express.Router();

// POST
endPoint.post('/users', async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user);
});

// GET
endPoint.get('/users', async (req, res) => {
    userModel.find().then(function (response) {
        res.json(response);
    }).catch(function (err) {
        res.json(err);
    })
})

module.exports = endPoint;