const express = require('express');
const router = express.Router();
const VasitaDetails = require('../models/VasitaDetails'); // Modeli import et
const User = require('../models/User');

// '/add-vasita-details' route'u
router.post('/add-vasita-details', async (req, res) => {
  const {
    userId,
    vehicleData,
    yearData,
    carData,
    modelData,
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
      userId,
      vehicleData,
      yearData,
      carData,
      modelData,
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

router.get('/get-vasita-details/:_id' , async (req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id);
    if(!data){
      return res.status(404).json("Veri bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
    console.log(error);
  }
});

router.get('/get-details-info/:_id' , async (req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('vehicleData , carData , yearData , modelData');
    if(!data){
      return res.status(404).json("Veri bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
    console.log(error);
  }
});

router.get('/get-details-title/:_id' , async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('detailsCardData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    const lastDetail = data.detailsCardData[data.detailsCardData.length - 1];

    res.json(lastDetail);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});

router.get('/get-details-photo/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('photoData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});

router.get('/get-details-price/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('detailsCardData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    const lastDetail = data.detailsCardData[data.detailsCardData.length - 1];

    res.json(lastDetail);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});

router.get('/get-details-address/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('city , district , neighborhood');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});
router.get('/get-details-ilan/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('carData , modelData , yearData , detailsCardData , createdAt');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});
router.get('/get-details-ilanUserWithDetails/:_id', async (req, res) => {
  try {
    // 1. İlan detaylarından userId'yi al
    const ilanData = await VasitaDetails.findById(req.params._id).select('userId');
    if (!ilanData) {
      return res.status(404).json("İlan Verisi Bulunamadı!");
    }
    const userId = ilanData.userId;

    // 2. userId ile kullanıcı detaylarını al
    const userData = await User.findById(userId).select('name , surname , createdAt');
    if (!userData) {
      return res.status(404).json("Kullanıcı Verisi Bulunamadı!");
    }

    // 3. İki veriyi birleştirerek döndür
    res.json({
      ilanData,
      userData,
    });
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});


router.get('/get-details-html/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('detailsCardData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    const lastDetail = data.detailsCardData[data.detailsCardData.length - 1];

    res.json(lastDetail);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});



router.get('/get-details-pce/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('pceInformationCardData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});
router.get('/get-details-security/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('securityData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});
router.get('/get-details-hardware/:_id' ,async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('hardwareData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});
router.get('/get-details-dishardware/:_id' , async(req,res)=>{
  try {
    const  data = await VasitaDetails.findById(req.params._id).select('dishardwareData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});

router.get('/get-details-media/:_id' , async(req,res)=>{
  try {
    const data = await VasitaDetails.findById(req.params._id).select('mediaData');
    if(!data){
     return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});

router.get('/get-details-vitrinHTML', async(req,res)=>{
  try {
    const data = await VasitaDetails.find().select('detailsCardData');
    if(!data){
      return res.status(404).json("Veri Bulunamadı!");
    }
    res.json(data);
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
})
router.get('/get-details-vitrinPHOTO', async (req, res) => {
  try {
    const data = await VasitaDetails.find().select('photoData');
    if (!data) {
      return res.status(404).json("Veri Bulunamadı!");
    }

    // Fotoğraf verisini işlerken yalnızca base64 kısmını alıyoruz
    const modifiedData = data.map((item) => {
      // photoData içerisindeki 'data:image' kısmını kaldırıyoruz
      if (item.photoData) {
        const base64Data = item.photoData.split(',')[1]; // data:image kısmını atlıyoruz
        return {
          _id: item._id,
          photoData: base64Data ? base64Data : null, // Sadece base64 kısmı
        };
      }
      return {
        _id: item._id,
        photoData: null,
      };
    });

    res.json(modifiedData); // İşlenmiş veriyi döndürüyoruz
  } catch (error) {
    res.status(500).json("Sunucu Hatası!");
  }
});

module.exports = router;
