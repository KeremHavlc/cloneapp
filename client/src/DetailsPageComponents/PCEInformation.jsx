import React, { useState, useEffect, useRef } from "react";
import damageArea from "../images/damage-area.png";
import DamageModal from "./DamageModal";

const PCEInformation = () => {
  const [onTampon, setOnTampon] = useState(false);
  const [kaput, setKaput] = useState(false);
  const [tavan, setTavan] = useState(false);
  const [sagOnCamurluk, setSagOnCamurluk] = useState(false);
  const [sagOnKapi, setSagOnKapi] = useState(false);
  const [sagArkaKapi, setSagArkaKapi] = useState(false);
  const [sagArkaCamurluk, setSagArkaCamurluk] = useState(false);
  const [solOnCamurluk, setSolOnCamurluk] = useState(false);
  const [solOnKapi, setSolOnKapi] = useState(false);
  const [solArkaKapi, setSolArkaKapi] = useState(false);
  const [solArkaCamurluk, setSolArkaCamurluk] = useState(false);
  const [bagaj, setBagaj] = useState(false);
  const [arkaTampon, setArkaTampon] = useState(false);

  const [damageInfo, setDamageInfo] = useState({
    onTampon: { type: "", details: "" },
    kaput: { type: "", details: "" },
    tavan: { type: "", details: "" },
    sagOnCamurluk: { type: "", details: "" },
    sagOnKapi: { type: "", details: "" },
    sagArkaKapi: { type: "", details: "" },
    sagArkaCamurluk: { type: "", details: "" },
    solOnCamurluk: { type: "", details: "" },
    solOnKapi: { type: "", details: "" },
    solArkaKapi: { type: "", details: "" },
    solArkaCamurluk: { type: "", details: "" },
    bagaj: { type: "", details: "" },
    arkaTampon: { type: "", details: "" },
  });

  const [onTamponInfo, setOnTamponInfo] = useState("");
  const [kaputInfo, setKaputInfo] = useState("");
  const [tavanInfo, setTavanInfo] = useState("");
  const [sagOnCamurlukInfo, setSagOnCamurlukInfo] = useState("");
  const [sagOnKapiInfo, setSagOnKapiInfo] = useState("");
  const [sagArkaKapiInfo, setSagArkaKapiInfo] = useState("");
  const [sagArkaCamurlukInfo, setSagArkaCamurlukInfo] = useState("");
  const [solOnCamurlukInfo, setSolOnCamurlukInfo] = useState("");
  const [solOnKapiInfo, setSolOnKapiInfo] = useState("");
  const [solArkaKapiInfo, setSolArkaKapiInfo] = useState("");
  const [solArkaCamurlukInfo, setSolArkaCamurlukInfo] = useState("");
  const [bagajInfo, setBagajInfo] = useState("");
  const [arkaTamponInfo, setArkaTamponInfo] = useState("");

  const handleDamageSelect = (area, type, details) => {
    setDamageInfo((prevState) => ({
      ...prevState,
      [area]: { type, details },
    }));
  };
  useEffect(() => {
    console.log(damageInfo);
    console.log(onTamponInfo);
  }, [damageInfo]);

  const handleRadioSelect = (event) => {
    const selectedValue = event.target.value;
    setOnTamponInfo(selectedValue);
  };
  useEffect(() => {
    if (onTamponInfo) {
      console.log("Seçilen Değer:", onTamponInfo);
    }
  }, [onTamponInfo]);

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOnTampon(false);
        setKaput(false);
        setTavan(false);
        setSagOnCamurluk(false);
        setSagOnKapi(false);
        setSagArkaKapi(false);
        setSagArkaCamurluk(false);
        setSolOnCamurluk(false);
        setSolOnKapi(false);
        setSolArkaKapi(false);
        setSolArkaCamurluk(false);
        setBagaj(false);
        setArkaTampon(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (setPartState) => {
    setPartState(true);
  };

  return (
    <>
      <div className="ml-[394px] pt-[120px] ">
        <span className="font-bold">Boya, Değişen ve Ekspertiz Bilgisi</span>
      </div>

      <div className="border bg-white w-[1050px] h-[850px] ml-[394px] mt-2">
        <div className="mt-4">
          <span className="font-bold text-sm ml-[50px]">
            Boyalı veya Değişen Parça&nbsp;<span className="text-tred">*</span>
          </span>

          {/* Hasar Seçme Bölümü */}
          <div className="w-[950px] h-[560px] border   ml-[50px] mt-4 relative">
            {/* Görsel */}
            <div className="flex ml-4 mt-[25px]">
              <img
                src={damageArea}
                alt="Workplace"
                useMap="#workmap"
                className="select-none"
              />

              {/* HASAR SEÇME BÖLÜMÜ 2  */}
              <div className="w-[550px] h-[500px] ml-[20px]">
                <div className="flex ml-[150px] mt-[20px] gap-8">
                  <span className="text-orjinal text-sm font-bold">
                    Orijinal
                  </span>
                  <span className="text-lokal text-sm font-bold">
                    Lokal Boyalı
                  </span>
                  <span className="text-boyali text-sm font-bold">Boyalı</span>
                  <span className="text-degisen text-sm font-bold ml-4">
                    Değişen
                  </span>
                </div>

                <div className="flex flex-col gap-2 text-base mt-2 font-bold">
                  <span className="flex items-center">
                    Ön Tampon
                    <span className="flex gap-[85px] ml-[72px]">
                      <input
                        type="radio"
                        name="on-tampon"
                        value="on-tampon-orijinal"
                        onChange={handleRadioSelect}
                      />
                      <input
                        type="radio"
                        name="on-tampon"
                        value="on-tampon-lokalboyali"
                        onChange={handleRadioSelect}
                      />
                      <input
                        type="radio"
                        name="on-tampon"
                        value="on-tampon-boyali"
                        onChange={handleRadioSelect}
                      />
                      <input
                        type="radio"
                        name="on-tampon"
                        value="on-tampon-değişen"
                        onChange={handleRadioSelect}
                      />
                    </span>
                  </span>

                  <span className="flex items-center">
                    Motor Kaputu
                    <span className="flex  gap-[85px] ml-[54px]">
                      <input type="radio" name="motor-kaputu" />
                      <input type="radio" name="motor-kaputu" />
                      <input type="radio" name="motor-kaputu" />
                      <input type="radio" name="motor-kaputu" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Tavan
                    <span className="flex  gap-[85px] ml-[117px]">
                      <input type="radio" name="tavan" />
                      <input type="radio" name="tavan" />
                      <input type="radio" name="tavan" />
                      <input type="radio" name="tavan" />
                    </span>
                  </span>

                  <span className="flex items-center">
                    Sağ Ön Çamurluk
                    <span className="flex  gap-[85px] ml-[28px]">
                      <input type="radio" name="sag-on-camurluk" />
                      <input type="radio" name="sag-on-camurluk" />
                      <input type="radio" name="sag-on-camurluk" />
                      <input type="radio" name="sag-on-camurluk" />
                    </span>
                  </span>

                  <span className="flex items-center">
                    Sağ Ön Kapı
                    <span className="flex  gap-[85px] ml-[68px]">
                      <input type="radio" name="sag-on-kapi" />
                      <input type="radio" name="sag-on-kapi" />
                      <input type="radio" name="sag-on-kapi" />
                      <input type="radio" name="sag-on-kapi" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Sağ Arka Kapı
                    <span className="flex  gap-[85px] ml-[55px]">
                      <input type="radio" name="sag-arka-kapi" />
                      <input type="radio" name="sag-arka-kapi" />
                      <input type="radio" name="sag-arka-kapi" />
                      <input type="radio" name="sag-arka-kapi" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Sağ Arka Çamurluk
                    <span className="flex  gap-[85px] ml-[17px]">
                      <input type="radio" name="sag-arka-camurluk" />
                      <input type="radio" name="sag-arka-camurluk" />
                      <input type="radio" name="sag-arka-camurluk" />
                      <input type="radio" name="sag-arka-camurluk" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Sol Ön Çamurluk
                    <span className="flex  gap-[85px] ml-[35px]">
                      <input type="radio" name="sol-on-camurluk" />
                      <input type="radio" name="sol-on-camurluk" />
                      <input type="radio" name="sol-on-camurluk" />
                      <input type="radio" name="sol-on-camurluk" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Sol Ön Kapı
                    <span className="flex  gap-[85px] ml-[74px]">
                      <input type="radio" name="sol-on-kapi" />
                      <input type="radio" name="sol-on-kapi" />
                      <input type="radio" name="sol-on-kapi" />
                      <input type="radio" name="sol-on-kapi" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Sol Arka Kapı
                    <span className="flex  gap-[85px] ml-[61px]">
                      <input type="radio" name="sol-arka-kapi" />
                      <input type="radio" name="sol-arka-kapi" />
                      <input type="radio" name="sol-arka-kapi" />
                      <input type="radio" name="sol-arka-kapi" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Sol Arka Çamurluk
                    <span className="flex  gap-[85px] ml-[23px]">
                      <input type="radio" name="sol-arka-camurluk" />
                      <input type="radio" name="sol-arka-camurluk" />
                      <input type="radio" name="sol-arka-camurluk" />
                      <input type="radio" name="sol-arka-camurluk" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Bagaj Kapağı
                    <span className="flex  gap-[85px] ml-[66px]">
                      <input type="radio" name="bagaj-kapagi" />
                      <input type="radio" name="bagaj-kapagi" />
                      <input type="radio" name="bagaj-kapagi" />
                      <input type="radio" name="bagaj-kapagi" />
                    </span>
                  </span>

                  <span className="flex items-center ">
                    Arka Tampon
                    <span className="flex  gap-[85px] ml-[64px]">
                      <input type="radio" name="arka-tampon" />
                      <input type="radio" name="arka-tampon" />
                      <input type="radio" name="arka-tampon" />
                      <input type="radio" name="arka-tampon" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <map name="workmap">
              {/* Bölgelere Tıklama Alanları */}
              <area
                shape="rect"
                coords="163,114,184,92"
                alt="OnTampon"
                onClick={() => handleMouseEnter(setOnTampon)}
              />
              <area
                shape="rect"
                coords="161,174,182,152"
                alt="Kaput"
                onClick={() => handleMouseEnter(setKaput)}
              />
              <area
                shape="rect"
                coords="161,322,182,300"
                alt="Tavan"
                onClick={() => handleMouseEnter(setTavan)}
              />
              <area
                shape="rect"
                coords="281,159,302,137"
                alt="Sag On Camurluk"
                onClick={() => handleMouseEnter(setSagOnCamurluk)}
              />
              <area
                shape="rect"
                coords="273,247,294,225"
                alt="Sag On Kapi"
                onClick={() => handleMouseEnter(setSagOnKapi)}
              />
              <area
                shape="rect"
                coords="273,326,294,304"
                alt="Sag Arka Kapi"
                onClick={() => handleMouseEnter(setSagArkaKapi)}
              />
              <area
                shape="rect"
                coords="283,403,304,381"
                alt="Sag Arka Camurluk"
                onClick={() => handleMouseEnter(setSagArkaCamurluk)}
              />
              <area
                shape="rect"
                coords="40,158,61,136"
                alt="Sol On Camurluk"
                onClick={() => handleMouseEnter(setSolOnCamurluk)}
              />
              <area
                shape="rect"
                coords="50,247,71,225"
                alt="Sol On Kapi"
                onClick={() => handleMouseEnter(setSolOnKapi)}
              />
              <area
                shape="rect"
                coords="50,325,71,303"
                alt="Sol Arka Kapi"
                onClick={() => handleMouseEnter(setSolArkaKapi)}
              />
              <area
                shape="rect"
                coords="40,401,61,379"
                alt="Sol Arka Camurluk"
                onClick={() => handleMouseEnter(setSolArkaCamurluk)}
              />
              <area
                shape="rect"
                coords="162,413,183,391"
                alt="Bagaj"
                onClick={() => handleMouseEnter(setBagaj)}
              />
              <area
                shape="rect"
                coords="163,450,184,428"
                alt="Arka Tampon"
                onClick={() => handleMouseEnter(setArkaTampon)}
              />
            </map>
            {/* Hover Alanları */}
            {onTampon && (
              <div
                ref={divRef}
                className="absolute top-[110px] left-[150px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Ön Tampon</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="onTampon"
                  />
                </div>
              </div>
            )}
            {kaput && (
              <div
                ref={divRef}
                className="absolute top-[170px] left-[190px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Kaput</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="kaput"
                  />
                </div>
              </div>
            )}
            {tavan && (
              <div
                ref={divRef}
                className="absolute top-[310px] left-[160px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Tavan</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="tavan"
                  />
                </div>
              </div>
            )}
            {sagOnCamurluk && (
              <div
                ref={divRef}
                className="absolute top-[160px] left-[270px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">
                    Sağ Ön Çamurluk
                  </span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="sagOnCamurluk"
                  />
                </div>
              </div>
            )}
            {sagOnKapi && (
              <div
                ref={divRef}
                className="absolute top-[240px] left-[260px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Sağ Ön Kapı</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="sagOnKapi"
                  />
                </div>
              </div>
            )}
            {sagArkaKapi && (
              <div
                ref={divRef}
                className="absolute top-[320px] left-[260px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Sağ Arka Kapı</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="sagArkaKapi"
                  />
                </div>
              </div>
            )}
            {sagArkaCamurluk && (
              <div
                ref={divRef}
                className="absolute top-[400px] left-[270px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">
                    Sağ Arka Çamurluk
                  </span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="sagArkaCamurluk"
                  />
                </div>
              </div>
            )}
            {solOnCamurluk && (
              <div
                ref={divRef}
                className="absolute top-[150px] left-[30px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">
                    Sol Ön Çamurluk
                  </span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="solOnCamurluk"
                  />
                </div>
              </div>
            )}
            {solOnKapi && (
              <div
                ref={divRef}
                className="absolute top-[240px] left-[20px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Sol Ön Kapı</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="solOnKapi"
                  />
                </div>
              </div>
            )}
            {solArkaKapi && (
              <div
                ref={divRef}
                className="absolute top-[320px] left-[20px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Sol Arka Kapı</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="solArkaKapi"
                  />
                </div>
              </div>
            )}
            {solArkaCamurluk && (
              <div
                ref={divRef}
                className="absolute top-[400px] left-[20px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">
                    Sol Arka Çamurluk
                  </span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="solArkaCamurluk"
                  />
                </div>
              </div>
            )}
            {bagaj && (
              <div
                ref={divRef}
                className="absolute top-[400px] left-[150px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Bagaj</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="bagaj"
                  />
                </div>
              </div>
            )}
            {arkaTampon && (
              <div
                ref={divRef}
                className="absolute top-[430px] left-[150px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Arka Tampon</span>
                  <DamageModal
                    onDamageSelect={handleDamageSelect}
                    area="arkaTampon"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PCEInformation;
