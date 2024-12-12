import React from "react";
import damageArea from "../images/damage-area.png";
const PCEInformation = () => {
  return (
    <>
      <div className="ml-[394px] pt-[120px] ">
        <span className="font-bold">Boya, Değişen ve Ekspertiz Bilgisi</span>
      </div>

      <div className="border  bg-white w-[1050px] h-[850px] ml-[394px] mt-2">
        <div className="mt-4">
          <span className="font-bold text-sm  ml-[50px]">
            Boyalı veya Değişen Parça&nbsp;<span className="text-tred">*</span>
          </span>
          {/*Hasar Seçme Bölümü */}
          <div className="w-[950px] h-[560px] border ml-[50px] mt-4">
            <img src={damageArea} className="mt-[25px] ml-8" />
          </div>
          {/*Hasar Seçme Bölümü */}
          {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className=" ml-[50px] mt-4">
            <span className="font-bold">Ekspertiz Raporu</span>
          </div>
          {/*Rapor Yükleme Bölümü */}
          <div className="w-[950px] h-[140px] border ml-[50px] mt-4">
            <span>kerem</span>
          </div>
          {/*Rapor Yükleme Bölümü */}
        </div>
      </div>

      <div className="flex flex-col mt-52">
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
      </div>
    </>
  );
};

export default PCEInformation;
