import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";


const AddPage = () => {
  const navigate = useNavigate();

  const gohome = () => {
    navigate("/");
  };

  const getInfoFromToken = (token) => {
    if (!token) {
      console.log("Token Bulunamadi!");
      return null;
    }
    try {
      const payload = atob(token.split(".")[1]);
      const decoded = JSON.parse(payload);
      const { name, surname } = decoded;
      return { name, surname };
    } catch (error) {
      console.log("Token decoded Edilemedi!", error);
      return null;
    }
  };
  const token = localStorage.getItem("authToken");
  const userInfo = getInfoFromToken(token);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: (
        <div className="py-[8px] text-xl text-left px-[12px] border-b bg-white border-gray-300  w-full capitalize">
          {userInfo
            ? `${userInfo.name} ${userInfo.surname.charAt(0)}.`
            : "Bilinmeyen Kullanıcı"}
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="py-[8px] px-[12px] bg-white  border-gray-300 w-full text-sm">
          Bana Özel Özet
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="py-[8px] px-[12px] border-b bg-white border-gray-300 w-full text-sm">
          İlanlarım
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="py-[8px] px-[12px] border-b bg-white border-gray-300 w-full text-sm">
          Favorilerim
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="py-[8px] px-[12px] border-b border-t bg-white border-gray-300 w-full text-sm">
          Sepetim
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div className="py-[8px] px-[12px] border-b bg-white border-gray-300 w-full text-sm">
          S-Aracım{" "}
          <span className="bg-red-500 rounded-l-xl text-white py-[0.9px] px-[6px]">
            yeni
          </span>
        </div>
      ),
    },
    {
      key: "7",
      label: (
        <div className="py-[8px] px-[12px]  bg-white border-gray-300 w-full text-sm">
          Alım İşlemlerim
        </div>
      ),
    },
    {
      key: "8",
      label: (
        <div className="py-[8px] px-[12px] bg-white border-b border-gray-300 w-full text-sm">
          Satış İşlemlerim
        </div>
      ),
    },
    {
      key: "9",
      label: (
        <div className="py-[8px] px-[12px]  bg-white border-b border-gray-300 w-full text-sm">
          Hesabım
        </div>
      ),
    },
    {
      key: "10",
      label: (
        <button
          className="py-[8px] px-[12px] border-b bg-white border-gray-300 flex items-center w-full text-sm"
          onClick={handleLogout}
        >
          <IoExitOutline className="text-2xl pr-2 text-gri2" />
          Çıkış Yap
        </button>
      ),
    },
  ];

  return (
    <>
      <div>
        <div className="h-[59px] bg-gri border-b flex justify-between">
          <div className="ml-[394px] pt-[12px]">
            <div className=" flex justify-center items-center bg-sari w-[160px] h-[33px] font-bold text-xl select-none">
              <span onClick={gohome} className="font-kerem">
                sahibinden.com
              </span>
            </div>
          </div>

          <Space direction="vertical" className="mr-[475px]">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                  style: {
                    width: "250px",
                    borderRadius: "0",
                    backgroundColor: "#f9fafb",
                  },
                }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                className="rounded-none"
                trigger={["click"]}
              >
                <button className="ml-[90px] flex flex-row mt-[19px] border-none bg-gri text-white text-sm w-auto h-auto capitalize">
                  {userInfo
                    ? `${userInfo.name} ${userInfo.surname.charAt(0)}.`
                    : "Bilinmeyen Kullanıcı"}
                  <IoIosArrowDown className="mt-[4px] ml-[2px] text-logocolor" />
                </button>
              </Dropdown>
            </Space>
          </Space>
        </div>
        <div className="bg-addgri h-screen ">
          <div className="h-[600px] w-[1000px] bg-white border ml-[460px] mt-[110px] absolute">
            <div className="mt-6">
              <span className="text-lg font-bold ml-[20px] ">
                Adım Adım Kategori Seç
              </span>
            </div>
            <div className="grid grid-cols-5 mt-[50px] ml-[21px]">
              <Categories />
            </div>
            <div className="mt-[16px] flex items-center justify-center gap-4">
              <div className="border-t border-gray-300 w-[450px]"></div>
              <span className="text-black font-bold">veya</span>
              <div className="border-t border-gray-300 w-[450px]"></div>
            </div>
            <div className="flex flex-col ml-[20px] mt-[20px]">
              <span className="font-bold">
                🔍 Kelime ile Arayarak Kategori Seç
              </span>
              <input
                type="text"
                placeholder="Lüten ilanınızı tanımlayan kelimelerle arama yapınız."
                className="border mt-4 h-[45px] w-[400px] placeholder:pl-4 focus:border-cyan-500 focus:outline-none rounded-md"
              />
              <span className="mt-4  text-sm">Ör: galaxy s5</span>
            </div>
          </div>
        </div>
        <footer className="bg-gray-100 border-t-2 py-4 text-center text-sm text-gray-600">
          <p>
            © 2024 sahibinden.com. Tüm hakları saklıdır. |{" "}
            <a href="#" className="text-mavi hover:underline">
              Gizlilik Politikası
            </a>{" "}
            |{" "}
            <a href="#" className="text-mavi hover:underline">
              Kullanım Koşulları
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default AddPage;
