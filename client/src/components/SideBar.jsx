import React from "react";
import { FaHome } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import Vitrin from "./Vitrin";

const SideBar = () => {
  return (
    <>
    <div className="flex">

    
      <div className="ml-[394px] mt-[70px] w-[250px] border-t-2 pt-2">
        <div class="flex items-center space-x-2 mt-[8px] ml-[8px] ">
          <div class="flex items-center justify-center w-6 h-6 rounded-full bg-homeicon">
            <FaHome className="text-white" />
          </div>
          <div className="">
            <p className="font-semibold">
              <span className="text-tmavi">Emlak</span>{" "}
              <span className="text-tgri">(1.145.232)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-[40px] pt-2">
          <p className="text-sm ">
            <span className="text-tmavi">Konut</span>{" "}
            <span className="text-tgri">(721.204)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">İş Yeri</span>{" "}
            <span className="text-tgri">(721.204)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Arsa</span>{" "}
            <span className="text-tgri">(131.662)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Konut Projeleri</span>{" "}
            <span className="text-tgri">(279.429)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Bina</span>{" "}
            <span className="text-tgri">(1.255)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Devre Mülk</span>{" "}
            <span className="text-tgri">(1.897)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Turistik Tesis</span>{" "}
            <span className="text-tgri">(1.712)</span>
          </p>
        </div>

        <div class="flex items-center space-x-2 mt-[8px] ml-[8px] border-t-2 pt-2 ">
          <div class="flex items-center justify-center w-6 h-6 rounded-full bg-tred">
            <TbSteeringWheel className="text-white" />
          </div>
          <div className="">
            <p className="font-semibold">
              <span className="text-tmavi">Vasıta</span>{" "}
              <span className="text-tgri">(856.342)</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-[40px] pt-2">
          <p className="text-sm">
            <span className="text-tmavi">Otomobil</span>{" "}
            <span className="text-tgri">(441.996)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Arazi ,SUV & Pickup</span>{" "}
            <span className="text-tgri">(90.659)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Motosiklet</span>{" "}
            <span className="text-tgri">(134.374)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Minivan % Panelvan</span>{" "}
            <span className="text-tgri">(88.318)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Ticari Araçlar</span>{" "}
            <span className="text-tgri">(57.610)</span>
          </p>
          <p className="text-sm mt-1">
            <span className="text-tmavi">Elektrikli Araçlar</span>{" "}
            <span className="text-tgri">(7.127)</span>
          </p>
        </div>
      </div>
      <Vitrin />
      </div>
    </>
  );
};

export default SideBar;
