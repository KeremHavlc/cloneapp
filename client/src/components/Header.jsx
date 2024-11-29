import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaApple, FaBell } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  {
    /* modal işlemlerim */
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  {
    /* modal işlemlerim */
  }

  const navigate = useNavigate();

  const [showIcon, setShowIcon] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleFocus = () => {
    setShowIcon(true);
  };
  const handleBlur = () => {
    setShowIcon(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuth(true);
    }
  }, []);

  const tokenControl = () => {
    if (!auth) {
      setIsModalOpen(true);
    } else {
      navigate("/add");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuth(false);
    window.location.reload();
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (values) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const data = await res.json();
      if (res.status === 200 || res.status === 201) {
        const token = data.token;
        localStorage.setItem("authToken", token);
        navigate("/add");
      } else {
        alert("Kullanıcı Adi veya şifre Hatali!");
      }
    } catch (error) {
      console.log(error);
    }
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
        <div
          className="py-[8px] px-[12px] border-b bg-white border-gray-300 flex items-center w-full text-sm"
          onClick={logout}
        >
          <IoExitOutline className="text-2xl pr-2 text-gri2" />
          Çıkış Yap
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="">
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
                  <button className="material-icons  text-mavi mt-[5px]">
                    close
                  </button>
                ) : (
                  "Detaylı Arama"
                )}
              </button>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////  */}
          {auth ? (
            <Space direction="vertical">
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
                <div className="flex flex-row gap-2 mt-[19px] ml-2 text-logocolor">
                  <button>
                    {" "}
                    <IoIosMail className="text-2xl" />
                  </button>
                  <button>
                    {" "}
                    <FaBell className="text-xl" />
                  </button>
                  <button>
                    {" "}
                    <MdOutlineStarPurple500 className="text-2xl" />
                  </button>
                </div>
              </Space>
            </Space>
          ) : (
            <div className="ml-[163px] flex text-white text-sm ">
              <button
                className="hover:underline"
                onClick={() => navigate("/login")}
              >
                Giriş Yap
              </button>
              <span className="ml-2 mr-2 mt-[15px] border-l h-7 border-gray-500 shadow-2xl "></span>
              <button
                className="hover:underline"
                onClick={() => navigate("/register")}
              >
                Hesap Aç
              </button>
            </div>
          )}
          {/* ////////////////////////////////////////////////////////  */}
          <div>
            <div className="border ml-[20px] mt-[12px] w-[157px] h-[33px]">
              <div className="flex justify-center items-center mt-[4px] text-sm font-bold">
                <div className="text-white">
                  oto
                  <span className=" bg-sari font-bold text-black rounded-sm">
                    bid
                  </span>{" "}
                  ile Aracını Sat
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-sm bg-mavi ml-[11px] w-[138px] h-[33px] flex items-center justify-center mt-[12px] border-none text-white text-sm">
            <button onClick={tokenControl}>Ücretsiz* İlan Ver</button>
          </div>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={500}
        height={830}
        className="border-none"
      >
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-xl font-bold">İlan vermek için giriş yapın</h2>
          <input
            className="mt-[16px] w-[400px] h-[50px] border border-gray-300  placeholder:pl-4 focus:border-cyan-500 focus:outline-none focus:pl-[20px]"
            type="text"
            placeholder="E-posta adresi"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mt-[16px] w-[400px] h-[50px] border border-gray-300  placeholder:pl-4 focus:border-cyan-500 focus:outline-none"
            type="password"
            placeholder="Şifre"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className=" mt-[20px]">
            <button
              className="flex justify-center items-center border w-[400px] h-[40px] bg-mavi text-white font-bold hover:bg-blue-500"
              onClick={() => onFinish({ email, password })}
            >
              E-posta ile giriş yap
            </button>
          </div>

          <div className="flex justify-center items-center mt-[20px]">
            <span>Henüz hesabın yok mu? &nbsp;</span>
            <button
              onClick={() => navigate("/register")}
              className="text-mavi hover:underline"
            >
              Hesap aç&nbsp;➤
            </button>
          </div>

          <div className="mt-[16px] flex items-center justify-center gap-4">
            <div className="border-t border-gray-300 w-[150px]"></div>
            <span className="text-gray-500">VEYA</span>
            <div className="border-t border-gray-300 w-[150px]"></div>
          </div>

          <div className="mt-[20px]">
            <button className="flex gap-4 justify-center items-center border w-[400px] h-[40px] bg-white text-black hover:bg-gray-100">
              <FcGoogle className="text-2xl" />
              Google ile hesap aç
            </button>
          </div>

          <div className="mt-[20px]">
            <button className="flex gap-4 justify-center items-center border w-[400px] h-[40px] bg-white text-black hover:bg-gray-100">
              <FaApple className="text-2xl" />
              Apple ile hesap aç
            </button>
          </div>

          <div className="ml-[48px] flex justify-center items-center mt-[20px] text-sm">
            <span className="text-gray-600">
              Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde{" "}
              <span className="text-mavi hover:underline">
                Bireysel Hesap Sözleşmesi
              </span>{" "}
              ve Ekleri'ni kabul etmiş sayılırsınız.
            </span>
          </div>

          <div className="ml-[48px] w-[498px] h-[50px] text-xs mt-[20px] flex flex-col">
            <span className="text-gray-500">
              Tarafınızca sağlanmış olan kişisel verileriniz hesap açma
              esnasında kimlik doğrulama tercihinize bağlı olarak Google veya
              Apple vasıtasıyla işlenebilecektir. Kişisel verilerin korunması
              hakkında detaylı bilgiye&nbsp;
              <span className="text-black hover:underline">buradan</span>{" "}
              ulaşabilirsiniz.
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
