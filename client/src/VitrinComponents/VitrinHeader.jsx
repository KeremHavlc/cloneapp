import React, { useEffect, useState } from "react";

const VitrinHeader = () => {
  const [fetchData, setFetchData] = useState([]);
  const [vehicleFetch, setVehicleFetch] = useState("");
  const [yearFetch, setYearFetch] = useState("");
  const [carFetch, setCarFetch] = useState("");
  const [modelFetch, setModelFetch] = useState("");

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-info/676f6668f29aa130115c2d7d"
      );
      if (!response.ok) {
        throw new Error("Bir hata oluştu!");
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  useEffect(() => {
    setVehicleFetch(fetchData.vehicleData);
    setYearFetch(fetchData.yearData);
    setCarFetch(fetchData.carData);
    setModelFetch(fetchData.modelData);
  }, [fetchData]);

  return (
    <>
      <div className="h-[30px] mt-0 border bg-vitringri shadow-md ">
        <div className="ml-[394px] flex justify-between mr-[394px]">
          <div className="text-xs flex gap-2 mt-1 font-normal text-tmavi select-none">
            <span className="hover:underline cursor-pointer">Vasıta</span>
            <span>→ </span>
            <span className="hover:underline cursor-pointer">
              {vehicleFetch}
            </span>
            <span className="">→ </span>
            <span className="hover:underline cursor-pointer">{yearFetch}</span>
            <span>→ </span>
            <span className="hover:underline cursor-pointer">{carFetch}</span>
            <span>→ </span>
            <span className="hover:underline cursor-pointer">{modelFetch}</span>
          </div>

          <div className="text-xs flex gap-2 mt-1 font-normal text-tmavi select-none">
            <span className="hover:underline cursor-pointer">
              Favori İlanlarım
            </span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">
              Favori Aramalarım
            </span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">
              Size Özel İlanlar
            </span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">Karşılaştır</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VitrinHeader;
