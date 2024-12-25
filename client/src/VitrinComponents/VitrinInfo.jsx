import React, { useEffect, useState } from "react";

const VitrinInfo = () => {
  const [dataFetch, setDataFetch] = useState([]);
  const [ilanNo, setIlanNo] = useState("");
  const [formattedDate, setFormattedDate] = useState("");
  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-ilan/676c6504f44b85f6b30d45d8"
      );
      if (!response.ok) {
        throw new Error("Bir Hata Oluştu!");
      }
      const data = await response.json();
      setDataFetch(data);
      setIlanNo(data._id);
      const date = new Date(data.createdAt); // Gelen tarih
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formatted = date.toLocaleDateString("tr-TR", options); // Türkçe tarih formatı
      setFormattedDate(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const lastDetail =
    dataFetch.detailsCardData && dataFetch.detailsCardData.length > 0
      ? dataFetch.detailsCardData[dataFetch.detailsCardData.length - 1]
      : null;

  return (
    <>
      <div className="ml-4 mt-2">
        <div className="border-b-2 w-full mt-1"></div>
        <div className="w-[300px]">
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">İlan No</span>
            <span
              className="text-red-500 font-bold relative group"
              title={ilanNo}
            >
              {ilanNo?.slice(0, 10)} ...
              <span className="absolute hidden group-hover:flex items-center justify-center p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg z-10 -top-8 left-0 w-max">
                {ilanNo}
              </span>
            </span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">İlan Tarihi</span>
            <span>{formattedDate || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Marka</span>
            <span className="">{dataFetch.carData || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Seri</span>
            <span className="">{dataFetch.modelData || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Yıl</span>
            <span className="">{dataFetch.yearData || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Araç Durumu</span>
            <span className="">
              {lastDetail?.vehicleStatus || "Bilinmiyor"}
            </span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">KM</span>
            <span className="">{lastDetail?.km || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Renk</span>
            <span className="">{lastDetail?.color || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Garanti</span>
            <span className="">{lastDetail?.garanti || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Ağır Hasar Kayıtlı</span>
            <span className="">{lastDetail?.hasar || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Plaka / Uyruk</span>
            <span className="">{lastDetail?.uyruk || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Kimden</span>
            <span className="text-red-500 font-bold">Sahibinden</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
          <div className="flex flex-row justify-between mt-2 text-sm">
            <span className="font-bold">Takas</span>
            <span className="">{lastDetail?.takas || "Bilinmiyor"}</span>
          </div>
          <div className="border-b-2 border-dotted w-full mt-1"></div>
        </div>
      </div>
    </>
  );
};

export default VitrinInfo;
