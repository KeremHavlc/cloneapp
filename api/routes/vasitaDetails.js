const express = require('express');
const router = express.Router();
const VasitaDetails = require('../models/VasitaDetails'); // Modeli import et

// '/add-vasita-details' route'u
router.post('/add-vasita-details', async (req, res) => {
  const {
    detailsCardData,
    city,
    district,
    neighborhood,
    pceInformationCardData,
    ekspertizData,
    securityData,
    hardwareData,
    dishardwareData,
    mediaData,
    photoData,
    contactInfoData,
  } = req.body;

  console.log("Gelen Veri:", req.body);

  try {
    // Yeni veriyi kaydet
    const newVasitaDetails = new VasitaDetails({
      detailsCardData,
      city,
      district,
      neighborhood,
      pceInformationCardData,
      ekspertizData,
      securityData,
      hardwareData,
      dishardwareData,
      mediaData,
      photoData,
      contactInfoData,
    });

    // Veriyi veritabanına kaydet
    const savedDetails = await newVasitaDetails.save();

    // Başarılı yanıt
    res.status(200).json({
      message: 'Vasıta detayları başarıyla kaydedildi!',
      data: savedDetails,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Veritabanına veri kaydedilirken bir hata oluştu.',
      error: error.message,
    });
  }
});

module.exports = router;
