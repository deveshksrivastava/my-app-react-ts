var express = require('express');
const pool = require('./pool');
var router = express.Router();

/* GET home page. */
router.post('/generateorderno', function (req, res, next) {
    pool.query("insert into generateorderno (orderdate,ordertime,totalamount,emailid,mobileno,paymentmode,transactionid)values(?,?,?,?,?,?,?)", [req.body.orderdate, req.body.ordertime, req.body.totalamount, req.body.emailid, req.body.mobileno, req.body.paymentmode, req.body.transactionid], function (error, result) {
        if (error) {
            console.log(error)
            res.status(500).json({ result: false })
        }
        else {
            res.status(200).json({ result: true, orderid: result.insertId })
        }
    })
});

router.post('/submitorder', function (req, res, next) {
    console.log(req.bdy)
    q =
        "insert into orders(orderid, orderdate, ordertime, mobileno, emailid, username, address1, address2, state, city, mobileid, mobilename, price, offer, paymentmode, qtydemand, totalamount, deliverystatus) values ?";
    pool.query(
        q,
        [
            req.body.cart.map((item) => [
                req.body.orderid,
                req.body.orderdate,
                req.body.ordertime,
                req.body.mobileno,
                req.body.emailid,
                req.body.username,
                req.body.address1,
                req.body.address2,
                req.body.state,
                req.body.city,
                item.mobileid,
                item.mobilename,

                item.price,
                item.offer,
                req.body.paymentmode,
                item.qtydemand,
                req.body.totalamount,
                req.body.deliverystatus,
            ]),
        ],
        function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({ RESULT: false });
            } else {
                return res.status(200).json({ RESULT: true });
            }
        }
    );

});

router.get('/displayall', function (req, res) {
    pool.query("select * from generateorderno", function (error, result) {
        if (error) {
            console.log(error)
            res.status(500).json([])
        }
        else {
            res.status(200).json(result)
        }
    })
})

//http://localhost:5000/mysql/displayalldetails
router.get('/displayalldetails', function (req, res) {
    pool.query("select * from orders", function (error, result) {
        if (error) {
            console.log(error)
            res.status(500).json([])
        }
        else {
            res.status(200).json(result)
        }
    })
})

module.exports = router;