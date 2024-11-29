import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navigate = useNavigate();
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
              <span className="font-kerem">sahibinden.com</span>
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
      </div>
    </>
  );
};

export default AddPage;
