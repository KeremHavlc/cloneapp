import React, { useEffect, useState } from "react";

const VitrinPhotos = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-photo/676c6504f44b85f6b30d45d8"
      );
      const data = await response.json();

      if (data && data.photoData) {
        setImages(data.photoData); // Fotoğrafları set et
      } else {
        console.error("Fotoğraf verisi bulunamadı.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className="ml-[394px] mt-2 w-[510px] h-[645px] border-2 border-gray-300">
        <span className="flex justify-center items-center mt-16 font-bold text-2xl">
          Fotolar Gelecek İnşallah
        </span>
      </div>
    </>
  );
};

export default VitrinPhotos;
