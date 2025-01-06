// const express = require('express');
// var router = express.Router();
// const sql = require('mssql');
// const sqlConfig = require('./dbconnection')

// router.get('/category', (req, res) => {
//     sql.connect(sqlConfig, function (err) {
//         if (err) console.log(err);
//         // make a request as
//         var request = new sql.Request();
//         //make the query
//         // var query =
//         //   'SELECT TOP (1000) [CategoryID],[CategoryName] FROM [DAP].[dbo].[Category]'; // eg : "select * from tbl_name"

//         var query = "SELECT *  FROM [DAPDB].[dbo].[Customers]"
//         request.query(query, function (err, records) {
//             if (err) console.log(err);
//             else {
//                 console.log(records);
//                 res.json(records);
//                 //  your out put as records
//             }
//         });
//     });
// });


// export default router;