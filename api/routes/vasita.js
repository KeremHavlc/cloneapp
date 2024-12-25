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
});

router.get("/getlastvasita/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        // userId'ye göre en son eklenen kaydı getir
        const vasita = await Vasita.findOne({ userId: userId }).sort({ _id: -1 });

        if (!vasita) {
            return res.status(404).json({ message: "Kayıt bulunamadı!" });
        }

        res.status(200).json(vasita);
    } catch (error) {
        res.status(500).json({ error: "Sunucu hatası!" });
    }
});


   

module.exports = router