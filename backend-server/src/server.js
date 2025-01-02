const express = require('express'); // Import Express
const cors = require('cors');
const app = express(); // Create an Express app
const PORT = 5000; // Define the port
const mongoose = require('./mongodb/db'); // Import the database connection
const postgress_router = require('./posgress/users_router'); // Import the database connection
// const pool = require('./MySql/pool'); // Import the database connection
const User = require('./mongodb/models/User'); // Import the User model
const bodyParser = require('body-parser');
require("dotenv").config()
const lession1 = require('./learn-javascript/lession1/object')
var mysqlRouter = require('./MySql/router')
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_PG_USER,
    host: process.env.DB_PG_HOST,
    database: process.env.DB_PG_NAME,
    password: process.env.DB_PG_PASSWORD,
    port: process.env.DB_PG_PORT
});


var employeeController = require('./mongodb/controllers/employeeController');

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); //cors middle ware 1, execure in order
app.use(bodyParser.json());

app.use('/mysql', mysqlRouter); //calling mysql database
app.use('/mongodb', employeeController); // calling mongodb database
app.use('/posgress', postgress_router); // calling mongodb database

//http://localhost:5000/users from postgress

// Define a sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Server!');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
