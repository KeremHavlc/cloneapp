const mongoose = require("mongoose");

const vasitaSchema = mongoose.Schema(
    {
        selectedVehicle:{type:String,require:true},
        selectedYear:{type:String,require:true},
        selectedCar:{type:String,require:true},
        selectedModel:{type:String,require:true},
        userId:{type:String,require:true},
    },
    {timestamps:true}
)

const Vasita = mongoose.model("vasita" , vasitaSchema);
module.exports = Vasita ;