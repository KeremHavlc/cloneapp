import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
const VitrinHardware = ({id}) => {
  const hardWare = [
    "Hidrolik Direksiyon",
    "Üçüncü Sıra Koltuklar",
    "Deri Koltuk",
    "Kumaş Koltuk",
    "Elektrikli Camlar",
    "Klima",
    "Otm.Kararan Dikiz Aynası",
    "Ön Koltuk Kol Dayaması",
    "Anahtarsız Giriş ve Çalıştırma",
    "Fonksiyonel Direksiyon",
    "Isıtmalı Direksiyon",
    "Koltuklar (Elektrikli)",
    "Koltuklar (Hafızalı)",
    "Koltuklar (Isıtmalı)",
    "Koltuklar (Soğutmalı)",
    "Hız Sabitleme Sistemi",
    "Soğutmalı Torpido",
    "Yol Bilgisayarı",
    "Head-up Display",
    "Start / Stop",
    "Geri Görüş Kamerası",
    "Ön Görüş Kamerası",
  ];
  const [fetchData, setFetchData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vasitadetails/get-details-hardware/${id}`
      );
      if (!response.ok) {
        throw new Error("Sunucu Hatası!");
      }
      const data = await response.json();
      setFetchData(data.hardwareData || []);
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
        {hardWare.map((hardware, index) => {
          const isAvailable = fetchData.includes(hardware);
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
              {hardware}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VitrinHardware;
