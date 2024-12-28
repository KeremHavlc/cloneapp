import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const VitrinSecurity = ({ id }) => {
  const options = [
    "ABS",
    "AEB",
    "ESP / VSA",
    "BAS",
    "Distronic",
    "Yokuş Kalkış Desteği",
    "Zırhlı Araç",
    "Gece Görüş Sistemi",
    "Şerit Takip Sistemi",
    "Hava Yastığı (Sürücü)",
    "Hava Yastığı (Yolcu)",
    "Kör Nokta Uyarı Sistemi",
    "Yorgunluk Tespit Sistemi",
    "Isofix",
    "Çocuk Kilidi",
    "Merkezi Kilit",
    "Immobilizer",
  ];

  const [dataFetch, setDataFetch] = useState([]);

  const fetchingData = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/vasitadetails/get-details-security/${id}`
      );
      if (!res.ok) {
        throw new Error("Sunucu Hatası!");
      }
      const data = await res.json();
      setDataFetch(data.securityData || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="w-full border bg-vitrinpce border-orange-200 p-4">
      <div className="grid grid-cols-4 gap-y-2">
        {options.map((option, index) => {
          const isAvailable = dataFetch.includes(option);
          return (
            <div
              key={index}
              className={`flex items-center font-semibold text-sm ${
                isAvailable ? "text-black" : "text-gray-400"
              }`}
            >
              <span
                className={`mr-2 ${
                  isAvailable ? "text-green-600" : "invisible"
                }`}
              >
                <FaCheck />
              </span>
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VitrinSecurity;
