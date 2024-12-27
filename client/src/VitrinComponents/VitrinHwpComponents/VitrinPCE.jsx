import React, { useEffect, useState } from "react";
import image from "../VitrinHwpComponents/Vitrinİmages/car2.png";

const VitrinPCE = () => {
  const [fetchData, setFetchData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-pce/676c6504f44b85f6b30d45d8"
      );
      if (!response.ok) {
        throw new Error("Sunucu Hatası!");
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
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

  if (isLoading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata: {error}</p>;
  }

  return (
    <>
      <div className="w-[1116px] h-[487px] border bg-vitrinpce border-orange-200">
        <div className="flex flex-row">
          {/* Araba Resmi */}
          <img src={image} alt="" className="" />

          {/* Sağ tarafta liste */}
          {fetchData ? (
            <div className="flex flex-col ml-8">
              {/* Lokal Boyalı Parçalar */}
              <div className="flex flex-row">
                {localPaintedParts.length > 0 && (
                  <div className="flex flex-row mt-6">
                    <div className="w-2 h-2 mt-[6px] bg-lokal"></div>
                    <span className=" ml-2">
                      <span className="font-bold">Lokal Boyalı Parçalar</span>
                      <ul className="list-disc pl-4">
                        {localPaintedParts.map((part) => (
                          <li key={part}>
                            {part}:{" "}
                            {fetchData.pceInformationCardData[part]?.details}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>
                )}

                <div className="ml-32">
                  {/* Değişen Parçalar */}
                  {replacedParts.length > 0 && (
                    <div className="flex flex-row mt-6">
                      <div className="w-2 h-2 mt-[6px] bg-degisen"></div>
                      <span className=" ml-2">
                        <span className="font-bold">Değişen Parçalar</span>
                        <ul className="list-disc pl-4">
                          {replacedParts.map((part) => (
                            <li key={part}>
                              {part}:{" "}
                              {fetchData.pceInformationCardData[part]?.details}
                            </li>
                          ))}
                        </ul>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-24">
                {/* Boyalı Parçalar */}
                {paintedParts.length > 0 && (
                  <div className="flex flex-row mt-6">
                    <div className="w-2 h-2 mt-[6px] bg-boyali"></div>
                    <span className=" ml-2">
                      <span className="font-bold">Boyalı Parçalar</span>
                      <ul className="list-disc pl-4">
                        {paintedParts.map((part) => (
                          <li key={part}>
                            {part}:{" "}
                            {fetchData.pceInformationCardData[part]?.details}
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>Aracın Tüm Parçaları Orjinal</p>
          )}
        </div>
      </div>
    </>
  );
};

export default VitrinPCE;
