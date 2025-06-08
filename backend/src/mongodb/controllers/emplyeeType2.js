const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { string } = require('yup');
require("dotenv").config()
// const sha1 = require('sha1');



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

const PORT = 8899;
const app = express();
app.use(cors())
app.use(bodyParser.json());

const Register = require("./models/registers")


//getting all
app.get("/", async (req, res) => {
    // res.send("hellow world")
    try {
        // const getregister = new registerModel({name:name,email:email,Number:Number,Address:Address,LCState:LCState, 
        // Website:Website,classtime:classtime,gender:gender,trainingOption:trainingOption});  
        const getregister = await Register.find()
        res.json(getregister)
        //   res.json(getregister)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

// Getting One
app.get('/:id', getRegister, async (req, res) => {
    console.log(req)
    try {
        //res.send(req.params.id)
        await res.json(res.register)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

app.post("/name", async (req, res) => {
    console.log("post" + req);
})
//inserting records
app.post("/register", async (req, res) => {
    console.log(req);
    const reg = new Register({
        name: req.body.name,
        email: req.body.email,
        Number: req.body.Number,
        Address: req.body.Address,
        LCState: req.body.LCState,
        Website: req.body.Website,
        classtime: req.body.classtime,
        gender: req.body.gender,
        trainingOption: req.body.trainingOption
    })
    try {
        const newReg = await reg.save()
        res.status(201).json(newReg)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }



    // let name = req.body.name
    // let email = req.body.email
    // let Number = req.body.Number
    // let Address = req.body.Address
    // let LCState = req.body.LCState
    // let Website = req.body.Website
    // let classtime = req.body.classtime
    // let gender = req.body.gender
    // let trainingOption = req.body.trainingOption


    // // let pass = sha1(req.body.password);
    // ////////////////////insert data 
    // let ins = new registerModel({name:name,email:email,number:Number,Address:Address,LCState:LCState, 
    // Website:Website,classtime:classtime,gender:gender,trainingOption:trainingOption});
    // try{
    //     await ins.save((err) =>
    //     {
    //         if(err){ 
    //             console.log(err)
    //             res.json({'err':1,'msg':JSON.stringify(err)})
    //         }
    //         else if (email===null)
    //         {
    //             res.json({"err":2, 'msg':'Email cannot be blank'})
    //         }
    //         else {
    //             console.log("User registerd")
    //             res.json({'err':0,'msg':'User registerd'})
    //         }
    //     })
    // }catch(err){
    //      res.status(400).json({ message: err.message })
    // }



    //////////////////////finding and checking 
    // adminModel.findOne({email:email,password:pass},(err,data) =>
    // {
    //     if(err){ res.json({'err':1,'msg':'Something Wrong'})}
    //     else if(data == null)
    //     {
    //         res.json({'err':1,'msg':'Email or password is not correct'})
    //     }
    //     else 
    //     {
    //         res.json({'err':0,'msg':'Login Success','uid':email})
    //     }
    // })
})

// Updating one
app.patch("/:id", getRegister, async (req, res) => {
    console.log(req.body.name)
    if (req.body.name != null) {
        res.register.name = req.body.name
    }

    try {
        const updateRegister = await res.register.save()
        res.json(updateRegister)
    } catch (err) {
        err.status(400).json({ message: err.message })
    }

})

// Deleting one
app.delete("/:id", getRegister, async (req, res) => {
    console.log(req.params.id)
    try {
        await res.register.remove()
        res.json({ message: `Deleted registry ${req.params.id}` })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//getSubscriber function
async function getRegister(req, res, next) {
    console.log("getreg " + req.params.id)
    let register
    try {
        register = await Register.findById(req.params.id)
        if (register == null) {
            return res.status(404).json({ message: "Cannot find register" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.register = register
    next()
}



app.listen(PORT, () => {
    console.log(`Work on____________________ ${PORT}`)
})