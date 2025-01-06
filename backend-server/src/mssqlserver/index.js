// const sql = require('mssql');
// // // const Joi = require('joi')

// const sqlConfig = {
//     // user: 'sa', // Your SQL Server username
//     // password: 'mypassword', // Your SQL Server password
//     server: 'DESKTOP-0LVQLOB\\SQLEXPRESS', // Your server name (use 'localhost\\SQLEXPRESS' if using SQL Server Express)
//     database: 'DAPDB', // Your database name
//     options: {
//         encrypt: true, // Use this if you're on Azure
//         trustServerCertificate: true // Change to true for local dev / self-signed certs
//     }
// };

// // router.get('/category', (req, res) => {
// //     sql.connect(sqlConfig, function (err) {
// //         if (err) console.log(err);
// //         // make a request as
// //         var request = new sql.Request();
// //         //make the query
// //         // var query =
// //         //   'SELECT TOP (1000) [CategoryID],[CategoryName] FROM [DAP].[dbo].[Category]'; // eg : "select * from tbl_name"

// //         var query = "SELECT *  FROM [DAPDB].[dbo].[Customers]"
// //         request.query(query, function (err, records) {
// //             if (err) console.log(err);
// //             else {
// //                 console.log(records);
// //                 res.json(records);
// //                 //  your out put as records
// //             }
// //         });
// //     });
// // });


// export default router;