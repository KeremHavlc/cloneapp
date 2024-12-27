import React, { useEffect, useState } from "react";
import { AiFillTool } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { BsStars  } from "react-icons/bs";
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
      <div className="flex flex-col">
        <div className="ml-[394px] mt-2 w-[510px] h-[645px] border-2 border-gray-300">
          <span className="flex justify-center items-center mt-16 font-bold text-2xl">
            Fotolar Gelecek İnşallah
          </span>
        </div>
        <div className="ml-[430px] mt-4 flex flex-row">
          <div className="flex flex-row">
            <AiFillTool className="text-tmavi text-base" />
            <span className="text-tmavi text-xs ml-1 hover:underline cursor-pointer ">
              Araç Hasar Sorgula
            </span>
          </div>
          <div className="border ml-4"></div>
          <div className="flex flex-row ml-4">
            <IoDocumentText className="text-tmavi text-base" />
            <span className="text-tmavi text-xs ml-1 hover:underline cursor-pointer ">
              Ekspertiz Yaptır
            </span>
          </div>
          <div className="border ml-4"></div>
          <div className="flex flex-row ml-4">
            <BsStars  className="text-tmavi text-base" />
            <span className="text-tmavi text-xs ml-1 hover:underline cursor-pointer ">
              Sıfır Araçları İncele
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VitrinPhotos;
