const mongoose = require('mongoose');

// Vasıta Detayları için Model
const VasitaDetailsSchema = new mongoose.Schema({
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
});

const VasitaDetails = mongoose.model('VasitaDetails', VasitaDetailsSchema);

module.exports = VasitaDetails;
