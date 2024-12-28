import React, { useEffect, useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { VscPercentage } from "react-icons/vsc";
const VitrinPrice = ({ id }) => {
  const [priceFetch, setPriceFetch] = useState("");
  const fetchingData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vasitadetails/get-details-price/${id}`
      );
      if (!response.ok) {
        throw new Error("Bir Hata Oluştu!");
      }
      const data = await response.json();

      setPriceFetch(data.fiyat || "");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <>
      <div className="ml-4 mt-2 flex flex-row  w-[314px]  h-[30px]">
        <span className="text-lg font-semibold text-tmavi">{priceFetch}</span>
        <span className="ml-1 text-lg text-tmavi ">TL</span>
        <FaClockRotateLeft className="ml-2 text-lg text-tmavi mt-[6px]" />
        <div className="flex flex-row ml-20  text-tmavi">
          <VscPercentage className="text-sm mt-[6px]" />
          <span className="text-xs mt-1 hover:underline cursor-pointer ml-1">
            Kredi Teklifi Al
          </span>
        </div>
      </div>
    </>
  );
};

export default VitrinPrice;
