import React, { useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import { Dropdown, Space } from "antd";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";

const AddVasita = () => {
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

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showYear, setShowYear] = useState(false);
  const [showCar, setShowCar] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const categories = [
    "Otomobil",
    "Arazi, SUV & Pickup",
    "Motosiklet",
    "Minivan & Panelvan",
    "Ticari Araçlar",
    "Elektrikli Araçlar",
    "Deniz Araçları",
    "Hasarlı Araçlar",
    "Karavan",
    "Klasik Araçlar",
    "Hava Araçları",
    "ATV",
    "UTV",
    "Engelli Plakalı Araçlar",
  ];

  // Marka ve Model verisi
  const carModels = {
    Audi: ["A3", "A4", "A5", "A6", "A7", "A8", "E-Tron GT", "RS", "S Serisi"],
    BMW: [
      "1 Serisi",
      "2 Serisi",
      "3 Serisi",
      "4 Serisi",
      "5 Serisi",
      "6 Serisi",
      "7 Serisi",
      "8 Serisi",
      "İ Serisi",
      "M Serisi",
      "Z Serisi",
    ],
    BYD: ["Tang", "Yuan", "Dolphin"],
    Citroen: ["C-Elysee", "C3", "C4", "C4 X", "e-C4", "e-C4 X"],
    Cupra: ["Formentor", "Born", "Ateca"],
    Dacia: ["Sandero", "Lodgy", "Dokker", "Spring", "Jogger"],
    DSAutomobiles: ["DS 3", "DS 4", "DS 7 Crossback", "DS 9"],
    Ferrari: ["Portofino", "Roma", "488 GTB", "812 Superfast", "SF90 Stradale"],
    Fiat: ["500", "Panda", "Tipo", "Doblo", "500X", "Punto"],
    Ford: ["Fiesta", "Focus", "Mustang", "Mondeo", "Kuga", "Ranger"],
    Honda: ["Civic", "CR-V", "HR-V", "Jazz", "Accord", "Pilot"],
    Hyundai: ["i10", "i20", "i30", "Elantra", "Tucson", "Santa Fe", "Kona"],
    Jaguar: ["XE", "XF", "F-Type", "E-Pace", "F-Pace", "I-Pace"],
    Kia: ["Picanto", "Rio", "Ceed", "Sportage", "Sorento", "EV6"],
    Lexus: ["UX", "NX", "RX", "LS", "IS", "LC", "LX"],
    Maserati: ["Ghibli", "Levante", "Quattroporte", "MC20"],
    MercedesBenz: [
      "A-Serisi",
      "B-Serisi",
      "C-Serisi",
      "E-Serisi",
      "S-Serisi",
      "GLA",
      "GLC",
      "GLE",
      "SLS",
      "AMG GT",
    ],
    Mini: ["Cooper", "Clubman", "Countryman"],
    Opel: ["Corsa", "Astra", "Insignia", "Grandland", "Mokka", "Zafira"],
    Peugeot: ["208", "308", "508", "3008", "5008", "Partner"],
    Porsche: ["911", "Cayenne", "Macan", "Panamera", "Taycan", "Cayman"],
    Renault: ["Clio", "Captur", "Megane", "Talisman", "Kadjar", "Koleos"],
    Seat: ["Ibiza", "Leon", "Ateca", "Tarraco", "Arona"],
    Skoda: ["Fabia", "Octavia", "Superb", "Karoq", "Kodiaq", "Scala"],
    Suzuki: ["Swift", "Vitara", "Jimny", "S-Cross", "Baleno"],
    Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
    Toyota: [
      "Yaris",
      "Corolla",
      "Camry",
      "RAV4",
      "Land Cruiser",
      "Hilux",
      "Supra",
    ],
    Volkswagen: ["Golf", "Passat", "Tiguan", "Polo", "Arteon", "ID.4", "Jetta"],
    Volvo: ["XC40", "XC60", "XC90", "S60", "S90", "V60"],
  };

  const handleVehicleClick = (category) => {
    setSelectedVehicle(category);
    localStorage.setItem("Vehicle", category);
    setShowYear(true);
  };

  const years = [];
  for (let i = 2024; i >= 1970; i--) {
    years.push(i.toString());
  }

  const handleYearClick = (year) => {
    setSelectedYear(year);
    localStorage.setItem("Year", year);
    setShowCar(true);
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
    localStorage.setItem("Cars", car);
  };
  const handleModelClick = (model) => {
    setSelectedCar(model);
    localStorage.setItem("Models", model);
    setShowEnd(true);
  };
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
            {/* Araç Seçme işlemlerini yapman gereken yer olacak :D  */}
            <div className="w-full ml-5">
              <span className="text-blue-600 font-bold">Vasıta</span>
              <div className="flex gap-5 mt-2">
                <ul className="bg-blue-50 border border-gray-300 rounded-md shadow-md pt-4 text-sm pl-2 max-h-[250px] w-[180px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-100">
                  {categories.map((category) => (
                    <li
                      key={category}
                      onClick={() => handleVehicleClick(category)}
                      className={`hover:bg-blue-100 cursor-pointer ${
                        selectedVehicle === category
                          ? "bg-blue-200 font-bold"
                          : ""
                      }`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>

                {showYear && (
                  <ul className="bg-blue-50 border border-gray-300 rounded-md shadow-md pt-4 text-sm pl-2 max-h-[250px] w-[180px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-100">
                    {years.map((year) => (
                      <li
                        key={year}
                        onClick={() => handleYearClick(year)}
                        className={`hover:bg-blue-100 cursor-pointer ${
                          selectedYear === year ? "bg-blue-200 font-bold" : ""
                        }`}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                )}

                {showCar && selectedYear && (
                  <ul className="bg-blue-50 border border-gray-300 rounded-md shadow-md pt-4 text-sm pl-2 max-h-[250px] w-[180px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-100">
                    {Object.keys(carModels).map((car) => (
                      <li
                        key={car}
                        onClick={() => handleCarClick(car)}
                        className={`hover:bg-blue-100 cursor-pointer ${
                          selectedCar === car ? "bg-blue-200 font-bold" : ""
                        }`}
                      >
                        {car}
                      </li>
                    ))}
                  </ul>
                )}

                {selectedCar && (
                  <ul className="bg-blue-50 border border-gray-300 rounded-md shadow-md pt-4 text-sm pl-2 max-h-[250px] w-[180px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-blue-100">
                    {selectedCar &&
                      carModels[selectedCar] &&
                      Array.isArray(carModels[selectedCar]) &&
                      carModels[selectedCar].map((model) => (
                        <li
                          key={model}
                          onClick={() => handleModelClick(model)}
                          className={`hover:bg-blue-100 cursor-pointer ${
                            selectedCar === model ? "bg-blue-200 font-bold" : ""
                          }`}
                        >
                          {model}
                        </li>
                      ))}
                  </ul>
                )}
                {showEnd && (
                  <div className="w-[150px] h-[248px] border flex flex-col justify-center items-center shadow-xl cursor-pointer rounded-lg">
                    <span className="text-7xl text-okgreen">
                      <IoIosCheckmarkCircle />
                    </span>
                    <span className="text-slate-950 font-extrabold text-sm ml-6">
                      Kategori seçimi tamamlanmıştır.
                    </span>
                    <button className="border h-[40px] w-[115px] mt-2 bg-mavi text-white shadow-sm hover:bg-blue-400">
                      Devam
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Buraya kadar olan kısım ile xd :D  */}

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

export default AddVasita;
