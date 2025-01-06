


const sqlConfig = {
    // user: 'sa', // Your SQL Server username
    // password: 'mypassword', // Your SQL Server password
    server: 'DESKTOP-0LVQLOB\\SQLEXPRESS', // Your server name (use 'localhost\\SQLEXPRESS' if using SQL Server Express)
    database: 'DAPDB', // Your database name
    options: {
        encrypt: true, // Use this if you're on Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

module.exports = sqlConfig;


// const config = {
//     user: 'user', // better stored in an app setting such as process.env.DB_USER
//     password: 'admin@123', // better stored in an app setting such as process.env.DB_PASSWORD
//     server: 'mysqlserverdemo1.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
//     port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
//     database: 'my-sqldb', // better stored in an app setting such as process.env.DB_NAME
//     authentication: {
//         type: 'default',
//     },
//     options: {
//         encrypt: true,
//     },
// };