import React from "react";
import { FaHome } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";

const Categories = () => {
  return (
    <>
      <div className="h-[110px] w-[175px] border hover:shadow-lg">
        <div className="border-t-8 border-homeicon rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-homeicon">
              <FaHome className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold">Emlak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[110px] w-[175px] border hover:shadow-lg">
        <div className="border-t-8 border-tred rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center flex-col w-8 h-8 mt-[12px] rounded-full bg-tred">
              <TbSteeringWheel className="text-white" />
            </div>
            <div>
              <span className="text-black font-semibold">Vasıta</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
