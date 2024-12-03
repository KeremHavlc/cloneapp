import React from "react";
import { FaHome, FaTools, FaTractor } from "react-icons/fa";
import { TbBabyCarriageFilled, TbSteeringWheel } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { RiPaintBrushFill } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { PiPawPrintFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const handleAddEmlak = () => {
    navigate("/add/emlak");
  };
  const handleAddVasita = () => {
    navigate("/add/vasita");
  };

  return (
    <>
      <div
        className="h-[120px] w-[175px] border shadow-lg hover:shadow-xl cursor-pointer"
        onClick={handleAddEmlak}
      >
        <div className="border-t-8 border-homeicon rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-homeicon">
              <FaHome className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">Emlak</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-[120px] w-[175px] border hover:shadow-lg cursor-pointer"
        onClick={handleAddVasita}
      >
        <div className="border-t-8 border-tred rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-tred">
              <TbSteeringWheel className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">Vasıta</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg cursor-pointer">
        <div className="border-t-8 border-yedekparca rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-yedekparca">
              <FaTools className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm ml-4">
                Yedek Parça, Aksesuar, &nbsp;
              </span>
              <span className="text-black font-semibold text-sm ml-4">
                Donanım & Tuning
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg cursor-pointer">
        <div className="border-t-8 border-ikinciel rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-ikinciel">
              <FaCartShopping className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                İkinci El ve Sıfır Allışveriş
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg cursor-pointer">
        <div className="border-t-8 border-ismakineleri rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-ismakineleri">
              <FaTractor className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                İş Makinelerei & Sanayi
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg mt-[30px] cursor-pointer">
        <div className="border-t-8 border-ustalar rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-ustalar">
              <RiPaintBrushFill className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                Ustalar ve Hizmetler
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg mt-[30px] cursor-pointer">
        <div className="border-t-8 border-özelders rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-özelders">
              <GiOpenBook className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                Özel Ders Verenler
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg mt-[30px] cursor-pointer">
        <div className="border-t-8 border-isilanlari rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-isilanlari">
              <IoIosPerson className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                İş İlanları
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg mt-[30px] cursor-pointer">
        <div className="border-t-8 border-hayvanlar rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-hayvanlar">
              <PiPawPrintFill className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                Hayvanlar Alemi
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[120px] w-[175px] border hover:shadow-lg mt-[30px] cursor-pointer">
        <div className="border-t-8 border-yardimci rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-yardimci">
              <TbBabyCarriageFilled className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold text-sm">
                Yardımcı Arayanlar
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
