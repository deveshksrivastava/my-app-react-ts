const { Pool } = require('pg');

// Import dotenv to load environment variables
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_PG_USER,
    host: process.env.DB_PG_HOST,
    database: process.env.DB_PG_NAME,
    password: process.env.DB_PG_PASSWORD,
    port: process.env.DB_PG_PORT
});

// Connect to the MySQL server
pool.connect((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected!');
        connection.release(); // Always release the connection back to the pool
    }
});

module.exports = pool;