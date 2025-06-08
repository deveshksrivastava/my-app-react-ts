const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
