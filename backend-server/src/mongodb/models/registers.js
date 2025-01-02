const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    name: { type: String, unique: true, default: "TEST" },
    email: { type: String },
    number: { type: Date, default: Date.now },
    address: { type: String, unique: true },
    LCState: { type: String },
    Website: { type: String, unique: true },
    classtime: { type: String },
    gender: { type: String, unique: true },
    trainingOption: { type: String },
    created_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Register", registerSchema)
