import React from "react";
import { useEffect, useState } from "react";
import { TbSteeringWheel } from "react-icons/tb";

const InfoCard = () => {
  const getInfoFromToken = (token) => {
    if (!token) {
      console.log("Token Bulunamadi!");
      return null;
    }
    try {
      const payload = atob(token.split(".")[1]);
      const decoded = JSON.parse(payload);
      const { name, surname, userId } = decoded;
      return { name, surname, userId };
    } catch (error) {
      console.log("Token decoded Edilemedi!", error);
      return null;
    }
  };
  const token = localStorage.getItem("authToken");
  const userInfo = getInfoFromToken(token);
  const [vehicle, setVehicle] = useState(null);
  const [year, setYear] = useState(null);
  const [car, setCar] = useState(null);
  const [model, setModel] = useState(null);
  const fetchData = async () => {
    if (!userInfo || !userInfo.userId) {
      console.log("Kullanıcı bulunamadı!");
      return;
    }
    const url = `http://localhost:5000/api/vasita/getlastvasita/${userInfo.userId}`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status ${res.status}`);
      }
      const data = await res.json();
      setVehicle(data.selectedVehicle);
      setYear(data.selectedYear);
      setCar(data.selectedCar);
      setModel(data.selectedModel);
    } catch (error) {
      console.log("Veriler Alınırken Bir Hata Oluştu !");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className="ml-[394px] pt-[120px] ">
          <span className="font-bold">Seçtiğiniz Araca Ait Bilgiler</span>
          <span className="ml-[795px] text-sm text-mavi hover:underline cursor-pointer">
            Değiştir
          </span>
        </div>

        <div className="border bg-white w-[1050px] h-[280px] ml-[394px] mt-2">
          <div className="w-[950px] h-[158px] bg-detailsgri ml-[49px] mt-[30px] flex">
            <div className="w-1/3">
              <div className="flex justify-center items-center h-[155px] font-bold text-xl">
                <span> {car} </span>
                <span>&nbsp;</span>
                <span> {model} </span>
              </div>
            </div>
            <div className="w-2/3  pt-4">
              <div className="flex flex-wrap">
                <div className="w-1/4 p-4">
                  <div className="text-gri">
                    <span>Çekiş</span>
                  </div>
                  <div className="text-black font-semibold mt-[10px]">
                    <span>Sürekli (WD)</span>
                  </div>
                </div>
                <div className="w-1/4 p-4">
                  <div className="text-gri">
                    <span>Vites</span>
                  </div>
                  <div className="text-black font-semibold mt-[10px]">
                    <span>Otomatik</span>
                  </div>
                </div>
                <div className="w-1/4 p-4">
                  <div className="text-gri">
                    <span>Kasa Tipi</span>
                  </div>
                  <div className="text-black font-semibold mt-[10px]">
                    <span>Sedan</span>
                  </div>
                </div>
                <div className="w-1/4 p-4">
                  <div className="text-gri">
                    <span>Yıl</span>
                  </div>
                  <div className="text-black font-semibold mt-[10px]">
                    <span>{year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-[49px] mt-2">
            <span className="text-sm font-semibold">Kategori</span>
          </div>
          <div className="ml-[49px] mt-2 gap-4 flex ">
            <div class="flex items-center justify-center flex-col w-6 h-6 rounded-full bg-tred">
              <TbSteeringWheel className="text-white" />
            </div>
            <div>
                <span>{vehicle}&nbsp;</span>
                <span>→ &nbsp;</span>
                <span>{year}&nbsp;</span>
                <span>→ &nbsp;</span>
                <span>{car}&nbsp;</span>
                <span>→ &nbsp;</span>
                <span>{model}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
