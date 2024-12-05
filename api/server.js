const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000 ;
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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
/////////////////////
app.use("/api/users",authRoutes);
/////////////////////
app.use("/api/vasita" , vasitaRoutes);
/////////////////////


app.get("/" ,(req,res)=>{
    res.send("Hello World => Author:Kerem Havlucu!");
})

app.listen(PORT ,()=>{
    connect();
    console.log(`Server ${PORT} portunda çalıştı!`);
})