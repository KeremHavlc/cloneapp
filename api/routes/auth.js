const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

router.post("/register", async(req,res)=>{
    try {
        const {name,surname,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({name,surname,email ,password : hashedPassword});
        await newUser.save();

        const token = jwt.sign({userId:newUser._id} , process.env.SECRET_KEY, {expiresIn : '1h'});
        res.status(201).json({token});
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;