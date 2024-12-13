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
          <div className="w-[950px] h-[560px] border ml-[50px] mt-4 relative">
            {/* Görsel */}
            <img
              src={damageArea}
              alt="Workplace"
              useMap="#workmap"
              className="mt-[25px] ml-8 select-none"
            />
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
                  <DamageModal />
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
                  <DamageModal />
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
                  <DamageModal />
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
                  <DamageModal />
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
                  <DamageModal />
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
                  <DamageModal />
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
                  <DamageModal />
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
                  <DamageModal />
                </div>
              </div>
            )}
            {solOnKapi && (
              <div
                ref={divRef}
                className="absolute top-[240px] left-[40px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Sol Ön Kapı</span>
                  <DamageModal />
                </div>
              </div>
            )}
            {solArkaKapi && (
              <div
                ref={divRef}
                className="absolute top-[320px] left-[40px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Sol Arka Kapı</span>
                  <DamageModal />
                </div>
              </div>
            )}
            {solArkaCamurluk && (
              <div
                ref={divRef}
                className="absolute top-[400px] left-[30px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">
                    Sol Arka Çamurluk
                  </span>
                  <DamageModal />
                </div>
              </div>
            )}
            {bagaj && (
              <div
                ref={divRef}
                className="absolute top-[400px] left-[160px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Bagaj</span>
                  <DamageModal />
                </div>
              </div>
            )}
            {arkaTampon && (
              <div
                ref={divRef}
                className="absolute top-[440px] left-[160px] w-[450px] h-[200px] pointer-events-auto bg-white border z-10"
                style={{
                  transform: "translateX(8px) translateY(25px)",
                }}
              >
                <div className="pt-4 ml-1 select-none">
                  <span className="font-bold text-sm ml-1">Arka Tampon</span>
                  <DamageModal />
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
