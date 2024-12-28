import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
const VitrinDisHardware = () => {
  const dishardWare = [
    "Ayakla Açılan Bagaj Kapağı",
    "Hardtop",
    "Far (Adaptif)",
    "Aynalar (Elektrikli)",
    "Aynalar (Isıtmalı)",
    "Aynalar (Hafızalı)",
    "Park Sensörü (Arka)",
    "Park Sensörü (Ön)",
    "Park Asistanı",
    "Sunroof",
    "Panoramik Cam Tavan",
    "Römork Çeki Demiri",
    "Akıllı Bagaj Kapağı",
  ];
  const [fetchData, setFetchData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-dishardware/676f6668f29aa130115c2d7d"
      );
      if (!response.ok) {
        throw new Error("Sunucu Hatası!");
      }
      const data = await response.json();
      setFetchData(data.dishardwareData || []);
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
        {dishardWare.map((dishardWare, index) => {
          const isAvailable = fetchData.includes(dishardWare);
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
              {dishardWare}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VitrinDisHardware;
