import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const [showIcon, setShowIcon] = useState(false);
  const handleFocus = () => {
    setShowIcon(true);
  };
  const handleBlur = () => {
    setShowIcon(false);
  };
  return (
    <>
      <div>
        <div className="h-[59px] bg-gri border-b flex ">
          <div className="ml-[394px] pt-[12px]">
            <div className=" flex justify-center items-center bg-sari w-[160px] h-[33px] font-bold text-xl select-none">
              <span className="font-kerem">sahibinden.com</span>
            </div>
          </div>
          <div className="mt-[11px] ml-[16px] ">
            <div className="flex rounded-md group">
              <input
                className="bg-gri2 text-xs w-[230px] h-[36px] select-none  pl-[7px] focus:outline-none group-focus-within:bg-white group-focus-within:text-black "
                type="text"
                placeholder="Kelime, ilan no veya mağaza adı ile ara"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button
                className="material-icons flex items-center justify-center text-gray-600 bg-gri2 pr-[8px] pl-[4px] group-focus-within:bg-mavi group-focus-within:text-white "
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                search
              </button>
              <button
                className="text-white text-sm ml-[16px] hover:underline"
                onClick={() => navigate("/kerem")}
              >
                {showIcon ? (
                  <button className="material-icons text-mavi mt-[5px]">
                    close
                  </button>
                ) : (
                  "Detaylı Arama"
                )}
              </button>

              <div className="ml-[58px]">
                <button>Giriş Yap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
