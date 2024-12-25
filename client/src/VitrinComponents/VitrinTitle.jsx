import React, { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { TiPrinter } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
const VitrinTitle = () => {
  const [titleFetch, setTitleFetch] = useState("");
  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-title/676c6504f44b85f6b30d45d8"
      );
      if (!response.ok) {
        throw new Error("Bir Hata oluştu!");
      }
      const data = await response.json();
      setTitleFetch(data.title || ""); // `title` varsa al ve sakla
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <div className="ml-[394px] mt-4 flex justify-between mr-[394px]">
        <span className="text-xl font-bold">{titleFetch}</span>
        <div className="flex gap-1 text-sm mt-2  select-none">
          <div className="flex flex-row hover:underline cursor-pointer">
            <IoIosStar className="mt-[2px] text-tgri" />
            <span className="ml-1 text-tmavi text-xs ">Favorilerime Ekle</span>
          </div>
          <div className="flex flex-row ml-4 hover:underline cursor-pointer ">
            <TiPrinter className="mt-[2px] text-tgri" />
            <span className="text-tmavi ml-1 mr-6 text-xs">Yazdır</span>
          </div>
          <div className="flex flex-row gap-2">
            <span className="hover:underline cursor-pointer">
              <FaFacebookSquare className="text-xl text-mavi" />
            </span>
            <span className="hover:underline cursor-pointer">
              <FaSquareXTwitter className="text-xl" />
            </span>
            <span className="hover:underline cursor-pointer">
              <IoMailSharp className="text-xl text-white bg-tgri" />
            </span>
          </div>
        </div>
      </div>
      <div className="ml-[394px] border w-[1142px] mt-4"></div>
    </>
  );
};

export default VitrinTitle;
