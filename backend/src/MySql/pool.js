const mysql = require('mysql2');

// Import dotenv to load environment variables
require('dotenv').config();

// Create a connection to the database using environment variables
const pool = mysql.createPool({
    host: process.env.DB_HOST,       // e.g., 'localhost'
    user: process.env.DB_USER,       // e.g., 'root'
    password: process.env.DB_PASSWORD,  // e.g., 'your_password'
    database: process.env.DB_NAME    // e.g., 'your_database'
});

// Connect to the MySQL server
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected!');
        connection.release(); // Always release the connection back to the pool
    }
});

module.exports = pool;