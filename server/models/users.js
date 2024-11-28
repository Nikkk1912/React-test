const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    }
}, { versionKey: false });

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;