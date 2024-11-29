const mongoose = require('mongoose');

// MongoDB
mongoose.connect('mongodb://mykola:1234@localhost:27017/mongoHw3?authSource=admin')
    .then(() => console.log('Connected to mongodb!'))
    .catch(err => console.error("Bad staff happened to mongo ", err));

module.exports = mongoose;