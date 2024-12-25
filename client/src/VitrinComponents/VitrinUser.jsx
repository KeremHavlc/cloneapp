import React, { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import icon from "../images/icon.png";

const VitrinUser = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [userName, setUserName] = useState("Bilinmeyen Kullanıcı");

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-ilanUserWithDetails/676c6504f44b85f6b30d45d8"
      );
      if (!response.ok) {
        throw new Error("Bir Hata oluştu!");
      }
      const data = await response.json();

      // Kullanıcı adı ve soyadı
      const { name, surname, createdAt } = data.userData;
      setUserName(`${name} ${surname.charAt(0)}.`);

      // Tarih formatlama
      const date = new Date(createdAt);
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formatted = date.toLocaleDateString("tr-TR", options);
      setFormattedDate(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="w-[300px] h-[280px] border bg-vitrinusergri mt-3 shadow-sm ml-2">
          <div className="mt-4 ml-6 flex flex-col">
            <span className="font-bold text-lg capitalize">{userName}</span>
            <div className="flex flex-row">
              <span className="text-xs font-semibold text-gray-500">
                Hesap açma tarihi:
              </span>
              <span className="text-xs font-semibold text-gray-500 ml-2">
                {formattedDate || "Bilinmiyor"}
              </span>
            </div>
          </div>

          <div className="w-[250px] h-[150px] border bg-white mt-4 ml-6">
            <div className="flex justify-between mr-2 ml-2 mt-4">
              <span className="text-gray-800">Ev</span>
              <span className="text-black font-bold">BİLİNMİYOR</span>
            </div>
            <div className="border w-[226px] mt-2 ml-2"></div>
            <div className="flex justify-between mr-2 ml-2 mt-2">
              <span className="text-gray-800">İş</span>
              <span className="text-black font-bold">BİLİNMİYOR</span>
            </div>
            <div className="border w-[226px] mt-2 ml-2"></div>
            <div className="flex justify-between mr-2 ml-2 mt-2">
              <span className="text-gray-800">Cep</span>
              <span className="text-black font-bold">+90 (536) 990 1845</span>
            </div>
          </div>

          <div className="flex flex-row ml-24 mt-4">
            <FaRegMessage className="mt-1 text-tmavi" />
            <span className="ml-1 text-sm text-tmavi hover:underline cursor-pointer">
              Mesaj Gönder
            </span>
          </div>
        </div>

        <div className="w-[300px] h-[110px] border bg-white ml-2 mt-4 shadow-sm">
          <div className="flex flex-row">
            <img src={icon} className="mt-2 ml-6" alt="icon" />
            <span className="mt-3 ml-1 text-sm font-semibold">
              Güvenlik İpuçları
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs ml-6 mt-2 text-gray-600">
              İlgilendiğiniz aracı görmeden kapora ödemeyin,{" "}
              <span className="ml-0 mt-0">para göndermeyin.</span>
            </span>
            <div className="flex flex-row mt-2">
              <span className="text-xs ml-6 text-gray-600">
                Detaylı bilgi için
              </span>
              <span className="text-tmavi text-xs ml-1 hover:underline cursor-pointer">
                tıklayınız.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VitrinUser;
