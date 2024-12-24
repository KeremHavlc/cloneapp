const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();
app.use(express.json({ limit: "1000mb" })); // JSON boyut sınırı (örneğin 10MB)
app.use(express.urlencoded({ limit: "1000mb", extended: true }));
app.use(cors());

// Sadece belirli originlere izin ver (önerilir)
app.use(cors({
  origin: 'http://localhost:5173', // Frontend adresi
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB!");
    } catch (error) {
        console.log(error);
    }
}
/////////////////////
const authRoutes = require("./routes/auth.js");
const vasitaRoutes = require("./routes/vasita.js");
const cityRoutes = require("./routes/city.js");
/////////////////////
app.use("/api/users",authRoutes);
/////////////////////
app.use("/api/vasita" , vasitaRoutes);
/////////////////////
app.use("/api/city" , cityRoutes);



const vasitaDetailsRoutes = require("./routes/vasitaDetails.js");

app.use("/api/vasitadetails" , vasitaDetailsRoutes);







app.get("/" ,(req,res)=>{
    res.send("Hello World => Author:Kerem Havlucu!");
})

app.listen(PORT ,()=>{
    connect();
    console.log(`Server ${PORT} portunda çalıştı!`);
})