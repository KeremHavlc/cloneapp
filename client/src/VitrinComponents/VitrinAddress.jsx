import React, { useEffect, useState } from "react";

const VitrinAddress = () => {
  const [addressFetch, setAddressFetch] = useState([]);
  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-address/676b120f6210a1e7eebd412f"
      );
      if (!response.ok) {
        throw new Error("Bir hata oluştu!");
      }
      const data = await response.json();
      setAddressFetch(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  const getNeighborhoodName = (neighborhood) => {
    if (!neighborhood) return "";
    return neighborhood.replace(" MAHALLESİ", ""); // " MAHALLESİ" kısmını kaldırır
  };

  return (
    <>
      <div className="ml-4 mt-3 text-sm text-tmavi font-medium">
        <span className="hover:underline cursor-pointer">
          {addressFetch.city}
        </span>
        <span className="ml-2">/</span>
        <span className="ml-2 hover:underline cursor-pointer">
          {addressFetch.district}
        </span>
        <span className="ml-2">/</span>
        <span className="ml-2 hover:underline cursor-pointer">
          {getNeighborhoodName(addressFetch.neighborhood)}
          &nbsp; Mh.
        </span>
      </div>
    </>
  );
};

export default VitrinAddress;
