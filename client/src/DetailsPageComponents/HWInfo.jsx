import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaCheck } from "react-icons/fa";

const HWInfo = ({
  setSecurityData,
  setHardwareData,
  setDishardwareData,
  setMediaData,
}) => {
  const [expanded, setExpanded] = useState("panel1");
  const [isButtonClick, setIsButtonClick] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [selectedSecurity, setSelectedSecurity] = useState([]); // Seçilen verileri tutacak state
  const [selectedHardware, setSelectedHardware] = useState([]);
  const [selectedDisHardware, setSelectedDisHardware] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState([]);

  useEffect(() => {
    if (selectedSecurity) {
      setSecurityData(selectedSecurity);
    }
  }, [selectedSecurity]);

  useEffect(() => {
    if (selectedHardware) {
      setHardwareData(selectedHardware);
    }
  }, [selectedHardware]);

  useEffect(() => {
    if (selectedDisHardware) {
      setDishardwareData(selectedDisHardware);
    }
  }, [selectedDisHardware]);

  useEffect(() => {
    if (selectedMedia) {
      setMediaData(selectedMedia);
    }
  }, [selectedMedia]);

  const options = [
    "ABS",
    "AEB",
    "ESP / VSA",
    "BAS",
    "Distronic",
    "Yokuş Kalkış Desteği",
    "Zırhlı Araç",
    "Gece Görüş Sistemi",
    "Şerit Takip Sistemi",
    "Hava Yastığı (Sürücü)",
    "Hava Yastığı (Yolcu)",
    "Kör Nokta Uyarı Sistemi",
    "Yorgunluk Tespit Sistemi",
    "Isofix",
    "Çocuk Kilidi",
    "Merkezi Kilit",
    "Immobilizer",
  ];
  const hardWare = [
    "Hidrolik Direksiyon",
    "Üçüncü Sıra Koltuklar",
    "Deri Koltuk",
    "Kumaş Koltuk",
    "Elektrikli Camlar",
    "Klima",
    "Otm.Kararan Dikiz Aynası",
    "Ön Koltuk Kol Dayaması",
    "Anahtarsız Giriş ve Çalıştırma",
    "Fonksiyonel Direksiyon",
    "Isıtmalı Direksiyon",
    "Koltuklar (Elektrikli)",
    "Koltuklar (Hafızalı)",
    "Koltuklar (Isıtmalı)",
    "Koltuklar (Soğutmalı)",
    "Hız Sabitleme Sistemi",
    "Soğutmalı Torpido",
    "Yol Bilgisayarı",
    "Head-up Display",
    "Start / Stop",
    "Geri Görüş Kamerası",
    "Ön Görüş Kamerası",
  ];
  const disHardWare = [
    "Ayakla Açılan Bagaj Kapağı",
    "Hardtop",
    "Far (Adaptif)",
    "Aynalar (Elektrikli)",
    "Aynalar (Isıtmalı)",
    "Aynalar (Hafızalı)",
    "Park Sensörü (Arka)",
    "Park Sensörü (Ön)",
    "Park Asistanı",
    "Sunroof",
    "Panoramik Cam Tavan",
    "Römork Çeki Demiri",
    "Akıllı Bagaj Kapağı",
  ];
  const multimedya = [
    "Android Auto",
    "Apple Car Play",
    "Bluetooth",
    "USB / AUX",
  ];

  // Checkbox değiştiğinde çağrılır
  const handleCheckboxChange = (option) => {
    setSelectedSecurity((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option); // Eğer zaten seçiliyse kaldır
      } else {
        return [...prev, option]; // Eğer seçili değilse ekle
      }
    });
  };
  const handleCheckboxChange2 = (option) => {
    setSelectedHardware((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleCheckboxChange3 = (option) => {
    setSelectedDisHardware((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleCheckBoxChange4 = (option) => {
    setSelectedMedia((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleSubmit1 = () => {
    setExpanded("panel2");
    setIsButtonClick(true);
  };
  const handleSubmit2 = () => {
    setExpanded("panel3");
    setIsButtonClick(true);
  };
  const handleSubmit3 = () => {
    setExpanded("panel4");
    setIsButtonClick(true);
  };

  return (
    <div className="ml-[394px] pt-[50px]">
      {/* Başlık */}
      <span className="font-bold text-lg">Donanım Bilgisi</span>

      {/* Ana Kutu */}
      <div className="border bg-white w-[1050px] h-auto mt-4  p-4">
        {/* Accordion Listesi */}
        <div className="w-full flex flex-col items-center gap-4">
          {/* Güvenlik Accordion */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="w-[900px] border-2 shadow-xl"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-mavi" />}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{ backgroundColor: "#ececec" }}
            >
              <Typography className="flex items-center gap-2">
                <span className="text-mavi font-bold">Güvenlik</span>
                <span className="text-red-500">*</span>
                {selectedSecurity && selectedSecurity.length > 0 ? (
                  <div className="flex flex-row">
                    <span className="text-gray-500 ml-2 text-sm">
                      ({selectedSecurity.length} seçili)
                    </span>
                    {isButtonClick ? (
                      <div className="ml-1 mt-[2px]">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500 ml-2 text-sm">
                    (Seçim Yapılmadı)
                  </span>
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="p-1">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    {options.map((item, index) => (
                      <label
                        key={index}
                        className="inline-flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSecurity.includes(item)}
                          onChange={() => handleCheckboxChange(item)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                        />
                        <span className="text-gray-600 text-xs font-semibold">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="border w-800 h-0"></div>
                  <div className="flex flex-row">
                    {/* Güvenlik Seçimi Yapmak İstemiyorum */}
                    <div className="flex items-center space-x-2 mb-4 mt-4">
                      <input
                        type="checkbox"
                        id="noSafetyOption"
                        checked={selectedSecurity.length === 0} // Eğer hiçbir şey seçili değilse true
                        onChange={() => setSelectedSecurity([])} // Tüm seçimleri temizle
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                      />
                      <label
                        htmlFor="noSafetyOption"
                        className="text-gray-700 text-sm cursor-pointer"
                      >
                        <span className="font-bold text-black">
                          Güvenlik seçimi yapmak istemiyorum
                        </span>
                      </label>
                    </div>

                    {/* Devam Butonu */}
                    <div className=" ml-[400px] mt-4">
                      <button
                        onClick={handleSubmit1}
                        className="px-6 py-2 bg-gray-100 text-mavi border rounded  focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Devam
                      </button>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* İç Donanım Accordion */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="w-[900px] border-2 shadow-xl"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-500" />}
              aria-controls="panel2-content"
              id="panel2-header"
              style={{ backgroundColor: "#ececec" }}
            >
              <Typography className="flex items-center gap-2">
                <span className="text-mavi font-bold">İç Donanım</span>
                <span className="text-red-500">*</span>
                {selectedHardware && selectedHardware.length > 0 ? (
                  <div className="flex flex-row">
                    <span className="text-gray-500 ml-2 text-sm">
                      ({selectedHardware.length} seçili)
                    </span>
                    {isButtonClick ? (
                      <div className="ml-1 mt-[2px]">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500 ml-2 text-sm">
                    (Seçim Yapılmadı)
                  </span>
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="p-1">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    {hardWare.map((item, index) => (
                      <label
                        key={index}
                        className="inline-flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedHardware.includes(item)}
                          onChange={() => handleCheckboxChange2(item)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                        />
                        <span className="text-gray-600 text-xs font-semibold">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="border w-800 h-0"></div>
                  <div className="flex flex-row">
                    {/* Güvenlik Seçimi Yapmak İstemiyorum */}
                    <div className="flex items-center space-x-2 mb-4 mt-4">
                      <input
                        type="checkbox"
                        id="noSafetyOption"
                        checked={selectedHardware.length === 0} // Eğer hiçbir şey seçili değilse true
                        onChange={() => setSelectedHardware([])} // Tüm seçimleri temizle
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                      />
                      <label
                        htmlFor="noSafetyOption"
                        className="text-gray-700 text-sm cursor-pointer"
                      >
                        <span className="font-bold text-black">
                          İç Donanım yapmak istemiyorum
                        </span>
                      </label>
                    </div>

                    {/* Devam Butonu */}
                    <div className=" ml-[400px] mt-4">
                      <button
                        onClick={handleSubmit2}
                        className="px-6 py-2 bg-gray-100 text-mavi border rounded  focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Devam
                      </button>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Dış Donanım Accordion */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className="w-[900px] border-2 shadow-xl"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-500" />}
              aria-controls="panel3-content"
              id="panel3-header"
              style={{ backgroundColor: "#ececec" }}
            >
              <Typography className="flex items-center gap-2">
                <span className="text-mavi font-bold">Dış Donanım</span>
                <span className="text-red-500">*</span>
                {selectedDisHardware && selectedDisHardware.length > 0 ? (
                  <div className="flex flex-row">
                    <span className="text-gray-500 ml-2 text-sm">
                      ({selectedDisHardware.length} seçili)
                    </span>
                    {isButtonClick ? (
                      <div className="ml-1 mt-[2px]">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500 ml-2 text-sm">
                    (Seçim Yapılmadı)
                  </span>
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="p-1">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    {disHardWare.map((item, index) => (
                      <label
                        key={index}
                        className="inline-flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedDisHardware.includes(item)}
                          onChange={() => handleCheckboxChange3(item)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                        />
                        <span className="text-gray-600 text-xs font-semibold">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="border w-800 h-0"></div>
                  <div className="flex flex-row">
                    {/* Güvenlik Seçimi Yapmak İstemiyorum */}
                    <div className="flex items-center space-x-2 mb-4 mt-4">
                      <input
                        type="checkbox"
                        id="noSafetyOption"
                        checked={selectedDisHardware.length === 0} // Eğer hiçbir şey seçili değilse true
                        onChange={() => setSelectedDisHardware([])} // Tüm seçimleri temizle
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                      />
                      <label
                        htmlFor="noSafetyOption"
                        className="text-gray-700 text-sm cursor-pointer"
                      >
                        <span className="font-bold text-black">
                          Dış Donanım yapmak istemiyorum
                        </span>
                      </label>
                    </div>

                    {/* Devam Butonu */}
                    <div className=" ml-[400px] mt-4">
                      <button
                        onClick={handleSubmit3}
                        className="px-6 py-2 bg-gray-100 text-mavi border rounded  focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Devam
                      </button>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Multimedya Accordion */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className="w-[900px] border-2 shadow-xl"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-500" />}
              aria-controls="panel4-content"
              id="panel4-header"
              style={{ backgroundColor: "#ececec" }}
            >
              <Typography className="flex items-center gap-2">
                <span className="text-mavi font-bold">Multimedya</span>
                <span className="text-red-500">*</span>
                {selectedMedia && selectedMedia.length > 0 ? (
                  <div className="flex flex-row">
                    <span className="text-gray-500 ml-2 text-sm">
                      ({selectedMedia.length} seçili)
                    </span>
                    {isButtonClick ? (
                      <div className="ml-1 mt-[2px]">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500 ml-2 text-sm">
                    (Seçim Yapılmadı)
                  </span>
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="p-1">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    {multimedya.map((item, index) => (
                      <label
                        key={index}
                        className="inline-flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedMedia.includes(item)}
                          onChange={() => handleCheckBoxChange4(item)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                        />
                        <span className="text-gray-600 text-xs font-semibold">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="border w-800 h-0"></div>
                  <div className="flex flex-row">
                    {/* Güvenlik Seçimi Yapmak İstemiyorum */}
                    <div className="flex items-center space-x-2 mb-4 mt-4">
                      <input
                        type="checkbox"
                        id="noSafetyOption"
                        checked={selectedMedia.length === 0} // Eğer hiçbir şey seçili değilse true
                        onChange={() => setSelectedMedia([])} // Tüm seçimleri temizle
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
                      />
                      <label
                        htmlFor="noSafetyOption"
                        className="text-gray-700 text-sm cursor-pointer"
                      >
                        <span className="font-bold text-black">
                          Mutlimedya seçimi yapmak istemiyorum
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HWInfo;
