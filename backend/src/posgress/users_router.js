var express = require('express');
//This is the mock database for the server
require('dotenv').config();
// const { Pool } = require('pg');

const pool = require('./pool');
var router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const consulta = 'SELECT * FROM users;';
        const result = await pool.query(consulta);
        res.json(result.rows);
    } catch (error) {
        console.error('Erro na consulta:', error);
        res.status(500).json({ error: 'Erro na consulta' });
    }
});

module.exports = router;

// router.get('/displayall', function (req, res) {
//     pool.query("select * from users", function (error, result) {
//         if (error) {
//             console.log(error)
//             res.status(500).json([])
//         }
//         else {
//             res.status(200).json(result)
//         }
//     })
// })

// // Flag to track if the pool is closed
// let isPoolClosed = false;

// //Establishing connection to the postgressql server
// const pool = new Pool({
//     user: process.env.DB_PG_USER,
//     host: process.env.DB_PG_HOST,
//     database: process.env.DB_PG_NAME,
//     password: process.env.DB_PG_PASSWORD,
//     port: process.env.DB_PG_PORT
// });

// // //Execute Queries for testing
// pool.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Testing connection successful, current time:', res.rows[0].now);
// });

// // //Define one functionality of the DB
// // module.exports.get = (key, callback) => {
// //     const safeKey = key.replace(/[^a-zA-Z0-9_]/g, ''); // Basic sanitization
// //     const safe_query = `SELECT ${safeKey}`;
// //     pool.query(safe_query, (err, res) => {
// //         if (err) {
// //             console.error('Error occurred when executing query', err);
// //             callback(err, null);
// //         } else {
// //             const resultValue = res.rows.length > 0 ? res.rows[0][safeKey] : null;
// //             console.log(`Testing query - ${safeKey}: `, resultValue);
// //             callback(null, resultValue);
// //         }
// //     });
// // };


// //Close the db when ther server is shutting down
// // module.exports.closePool = () => {
// //     pool.end(() => {
// //         console.log('Shutting down connection to the postgressql server.')
// //     });
// // };

// async function getUsers() {
//     try {
//         const res = await pool.query('select * from users LIMIT 2'); // Replace 'users' with your table name
//         console.log(res.rows); // Output the rows retrieved
//     } catch (err) {
//         console.error('Error executing query', err.stack);
//     } finally {
//         await pool.end(); // Close the pool when done
//     }
// }

// // Function to close the pool
// async function closePool() {
//     if (!isPoolClosed) {
//         await pool.end();
//         isPoolClosed = true; // Set the flag to true after closing
//         console.log('Pool has been closed');
//     } else {
//         console.log('Pool is already closed');
//     }
// }

// // Main function to execute database operations
// async function main() {
//     try {
//         await getUsers(); // Call the function to get users
//     } catch (err) {
//         console.error('Error in getUsers function', err);
//     } finally {
//         await closePool(); // Close the pool after all operations are done
//     }
// }
// // Execute the main function
// main().catch(err => console.error('Error in main function', err));

// // Optionally, close the pool when the application exits
// process.on('exit', async () => {
//     if (!isPoolClosed) {
//         await closePool();
//     }
// });

// -----------------------
// const {Client} = require('pg');

// const client = new Client({
//     user: "postgres",
//     password: "xxxxxx",
//     host: "localhost",
//     port: 5432,
//     database:"node_express"
// });

// execute();
// async function execute() {
//     try {
//         await client.connect();
//         await client.query('BEGIN');
//         // console.log('Connection Successfully');
//         await client.query('update employee set name = $1',["Moreno"]);
//         console.log('Updated Successfully');
//         // const {rows} = await client.query('select * from employee')
//         // console.table(rows);
//         await client.query('insert into employee values ($1,$2)',[14,'Hamis']);
//         console.log('inserted a row successfully');
//         const {rows} = await client.query('select * from employee')
//         console.table(rows);

//         await client.query('COMMIT');
//     }
//     catch(e) {
//         console.log(`Something went wrong ${e}`);
//         await client.query('ROLLBACK');
//     }
//     finally {
//         await client.end();
//         console.log('Connection Disclosed');
//     }
       
// }


// client.connect()
// .then(() => console.log('Connection Successfully'))
// .then(() => client.query('insert into employee values ($1,$2)',[5,'Luis']))
// .then(() => client.query('select * from employee'))
// .then(results => console.table(results.rows))
// .catch(e => console.log(e))
// .finally(() => client.end());