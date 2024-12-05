const Vasita = require("../models/Vasita");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();


router.post("/addvasita" ,async(req,res)=>{
    try {
        const newVasita = new Vasita(req.body)
        await newVasita.save();
        res.status(200).json("Item added succesfully.");
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router