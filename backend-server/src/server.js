const express = require('express'); // Import Express
const cors = require('cors');
const app = express(); // Create an Express app
const PORT = 5000; // Define the port
const mongoose = require('./mongodb/db'); // Import the database connection
const User = require('./../models/User'); // Import the User model
const bodyParser = require('body-parser');
require("dotenv").config()
var employeeController = require('./mongodb/controllers/employeeController');

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); //cors middle ware 1, execure in order
app.use(bodyParser.json());

app.use('/employees', employeeController);

// Define a sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Server!');
});





// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
