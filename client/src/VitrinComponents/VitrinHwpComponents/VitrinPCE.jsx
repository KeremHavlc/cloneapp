import React, { useEffect, useState } from "react";
import image from "../VitrinHwpComponents/Vitrinİmages/car2.png";

const VitrinPCE = () => {
  const [fetchData, setFetchData] = useState({});
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-pce/676f6668f29aa130115c2d7d"
      );
      if (!response.ok) {
        throw new Error("Sunucu Hatası!");
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const getPartsByType = (type) => {
    return Object.keys(fetchData?.pceInformationCardData || {}).filter(
      (key) =>
        fetchData.pceInformationCardData[key]?.type.toLowerCase() ===
        type.toLowerCase()
    );
  };

  const localPaintedParts = getPartsByType("lokal boyalı");
  const paintedParts = getPartsByType("boyalı");
  const replacedParts = getPartsByType("değişen");

  return (
    <div className="w-[1116px] h-[487px] border bg-vitrinpce border-orange-200">
      <div className="flex flex-row">
        {/* Fotoğraf kısmı her zaman görünür */}
        <img src={image} alt="Car Image" className="" />

        {/* Sağ tarafta liste */}
        <div className="flex flex-col ml-8">
          {/* Lokal Boyalı Parçalar */}
          {localPaintedParts.length > 0 && (
            <div className="flex flex-row mt-6">
              <div className="w-2 h-2 mt-[6px] bg-lokal"></div>
              <span className="ml-2">
                <span className="font-bold">Lokal Boyalı Parçalar</span>
                <ul className="list-disc pl-4">
                  {localPaintedParts.map((part) => (
                    <li key={part}>
                      {part}: {fetchData.pceInformationCardData[part]?.details}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          )}

          {/* Değişen Parçalar */}
          {replacedParts.length > 0 && (
            <div className="flex flex-row mt-6 ml-32">
              <div className="w-2 h-2 mt-[6px] bg-degisen"></div>
              <span className="ml-2">
                <span className="font-bold">Değişen Parçalar</span>
                <ul className="list-disc pl-4">
                  {replacedParts.map((part) => (
                    <li key={part}>
                      {part}: {fetchData.pceInformationCardData[part]?.details}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          )}

          {/* Boyalı Parçalar */}
          {paintedParts.length > 0 && (
            <div className="flex flex-row mt-24">
              <div className="w-2 h-2 mt-[6px] bg-boyali"></div>
              <span className="ml-2">
                <span className="font-bold">Boyalı Parçalar</span>
                <ul className="list-disc pl-4">
                  {paintedParts.map((part) => (
                    <li key={part}>
                      {part}: {fetchData.pceInformationCardData[part]?.details}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VitrinPCE;
