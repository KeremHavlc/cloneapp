const mongoose = require('mongoose');

// Vasıta Detayları için Model
const VasitaDetailsSchema = new mongoose.Schema({
  userId : { type: String, required: true },
  vehicleData : { type: String, required: true },
  yearData : { type: String, required: true },
  carData : { type: String, required: true },
  modelData : { type: String, required: true },
  detailsCardData: { type: Object, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  neighborhood: { type: String, required: true },
  pceInformationCardData: { type: Object, required: true },
  ekspertizData: { type: Object, required: true },
  securityData: { type: Object, required: true },
  hardwareData: { type: Object, required: true },
  dishardwareData: { type: Object, required: true },
  mediaData: { type: Object, required: true },
  photoData: { type: Object, required: true },
  contactInfoData: { type: Object, required: true },
},
{timestamps:true});

const VasitaDetails = mongoose.model('VasitaDetails', VasitaDetailsSchema);

module.exports = VasitaDetails;
