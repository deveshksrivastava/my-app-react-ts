const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const uri = 'mongodb+srv://devesh:admin12345@cluster0.ffxxt.mongodb.net/sample_mflix?retryWrites=true&w=majority';

// Options for the connection
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(uri, options)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

module.exports = mongoose;
