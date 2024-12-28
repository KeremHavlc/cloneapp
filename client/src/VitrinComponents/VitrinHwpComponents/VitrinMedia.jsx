import React from "react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const VitrinMedia = () => {
  const multimedya = [
    "Android Auto",
    "Apple Car Play",
    "Bluetooth",
    "USB / AUX",
  ];
  const [fetchData, setFetchData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-media/676f6668f29aa130115c2d7d"
      );
      if (!response.ok) {
        throw new Error("Sunucu Hatası!");
      }
      const data = await response.json();
      setFetchData(data.mediaData || []);
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
        {multimedya.map((multimedya, index) => {
          const isAvailable = fetchData.includes(multimedya);
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
              {multimedya}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VitrinMedia;
