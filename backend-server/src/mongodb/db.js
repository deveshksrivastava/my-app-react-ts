const mongoose = require('mongoose');
// Import dotenv to load environment variables
require('dotenv').config();
// Replace with your MongoDB connection string
const uri = process.env.DB_MONGO_URL;

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
