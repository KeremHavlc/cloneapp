import React, { useEffect, useState } from "react";

const VitrinSecurity = () => {
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
        "http://localhost:5000/api/vasitadetails/get-details-security/676c6504f44b85f6b30d45d8"
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
    <div className="w-[1116px] border bg-vitrinpce border-orange-200 p-4">
      <div className="grid grid-cols-4 gap-4">
        {options.map((option, index) => {
          const isAvailable = dataFetch.includes(option);
          return (
            <div
              key={index}
              className={`border rounded p-2 flex items-center text-center shadow-sm ${
                isAvailable ? "text-black" : "text-gray-400"
              }`}
            >
              {isAvailable && <span className="text-green-500 mr-2">✔</span>}
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VitrinSecurity;
