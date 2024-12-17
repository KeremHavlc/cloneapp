import React, { useState, useEffect, useRef } from "react";
import damageArea from "../images/damage-area.png";
import DamageModal from "./DamageModal";
import { AiFillFileAdd } from "react-icons/ai";

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
  const [isAllOriginal, setIsAllOriginal] = useState(false);
  const handleSetAllOriginal = () => {
    setIsAllOriginal((prevState) => {
      const newState = !prevState; // Eğer zaten seçiliyse kaldır, değilse işaretle
      if (newState) {
        // Tüm parçaların type değerini "orijinal" yap
        setDamageInfo((prevState) => {
          const updatedInfo = {};
          Object.keys(prevState).forEach((key) => {
            updatedInfo[key] = { ...prevState[key], type: "orijinal" };
          });
          return updatedInfo;
        });
      }
      return newState;
    });
  };
  const handleDamageSelect = (area, type, details) => {
    setDamageInfo((prevState) => ({
      ...prevState,
      [area]: { type, details },
    }));
  };
  useEffect(() => {
    console.log(damageInfo);
  }, [damageInfo]);

  const handleRadioSelect = (event) => {
    const { name, value } = event.target; // event'ten name (parça) ve value'yu al
    setDamageInfo((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        type: value,
      },
    }));
    setIsAllOriginal(false); // Tüm orijinal seçimi kaldır
  };

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

  useEffect(() => {
    console.log(damageInfo); // Damage info state log for debugging
  }, [damageInfo]);

  const [file, setFile] = useState(null); // Yüklenen dosya state'i
  const [error, setError] = useState(""); // Hata mesajı state'i

  const maxFileSize = 25 * 1024 * 1024; // 25 MB

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    validateFile(uploadedFile);
  };

  const validateFile = (uploadedFile) => {
    if (uploadedFile) {
      // Format kontrolü
      if (uploadedFile.type !== "application/pdf") {
        setError("Yalnızca PDF dosyaları yükleyebilirsiniz.");
        setFile(null);
        return;
      }

      // Boyut kontrolü
      if (uploadedFile.size > maxFileSize) {
        setError("Dosya boyutu en fazla 25 MB olmalıdır.");
        setFile(null);
        return;
      }

      setError("");
      setFile(uploadedFile);
    }
  };
  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateFile(droppedFile);
  };

  return (
    <>
      <div className="ml-[394px] pt-[50px] ">
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
                  <span className="text-orjinal text-sm font-bold w-20 text-center">
                    Orijinal
                  </span>
                  <span className="text-lokal text-sm font-bold w-auto text-center whitespace-nowrap">
                    Lokal Boyalı
                  </span>
                  <span className="text-boyali text-sm font-bold w-10 text-center">
                    Boyalı
                  </span>
                  <span className="text-degisen text-sm font-bold w-20 text-center">
                    Değişen
                  </span>
                </div>

                <div className="flex flex-col gap-2 text-sm mt-2 font-semibold">
                  {[
                    { label: "Ön Tampon", key: "onTampon" },
                    { label: "Motor Kaputu", key: "kaput" },
                    { label: "Tavan", key: "tavan" },
                    { label: "Sağ Ön Çamurluk", key: "sagOnCamurluk" },
                    { label: "Sağ Ön Kapı", key: "sagOnKapi" },
                    { label: "Sağ Arka Kapı", key: "sagArkaKapi" },
                    { label: "Sağ Arka Çamurluk", key: "sagArkaCamurluk" },
                    { label: "Sol Ön Çamurluk", key: "solOnCamurluk" },
                    { label: "Sol Ön Kapı", key: "solOnKapi" },
                    { label: "Sol Arka Kapı", key: "solArkaKapi" },
                    { label: "Sol Arka Çamurluk", key: "solArkaCamurluk" },
                    { label: "Bagaj Kapağı", key: "bagaj" },
                    { label: "Arka Tampon", key: "arkaTampon" },
                  ].map(({ label, key }) => (
                    <span className="flex items-center" key={key}>
                      {label}
                      <span className="flex gap-[85px] ml-auto mr-[50px]">
                        <input
                          type="radio"
                          name={key}
                          value="orijinal"
                          checked={damageInfo[key].type === "orijinal"}
                          onChange={handleRadioSelect}
                        />
                        <input
                          type="radio"
                          name={key}
                          value="lokalboyali"
                          checked={damageInfo[key].type === "lokalboyali"}
                          onChange={handleRadioSelect}
                        />
                        <input
                          type="radio"
                          name={key}
                          value="boyali"
                          checked={damageInfo[key].type === "boyali"}
                          onChange={handleRadioSelect}
                        />
                        <input
                          type="radio"
                          name={key}
                          value="degisen"
                          checked={damageInfo[key].type === "degisen"}
                          onChange={handleRadioSelect}
                        />
                      </span>
                    </span>
                  ))}
                </div>
                <div className="select-none">
                  <input
                    type="radio"
                    name="orijinal"
                    value="orijinal"
                    className="mt-[45px]"
                    onChange={handleSetAllOriginal}
                    checked={isAllOriginal}
                  />
                  <span className="ml-4 text-sm font-semibold">
                    Aracımın boyanan ya da değişen parçası yok.
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
        <div className="ml-[50px] mt-4">
          <span className="font-bold">Ekspertiz Raporu</span>
          <div className="w-[950px] h-[150px] border mt-4 flex flex-row">
            <div
              className="border-dashed border-2 border-gray-300 mt-8 ml-8 text-center w-[250px] h-[76px] rounded-none"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-row pt-3"
              >
                <AiFillFileAdd className="text-mavi text-5xl ml-4" />
                <div className="flex flex-col">
                  <span className="text-mavi font-medium">Dosya Ekle</span>
                  <span className="text-gray-500 text-sm mt-0 ml-9">
                    ya da sürükle bırak
                  </span>
                </div>
              </label>
              <input
                id="fileInput"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            {/* Yine de div düzeni */}
            <div className="flex flex-col ml-6 pb-20 w-[590px]">
              <span className="text-xs text-gray-700 mt-9">
                Aracınıza ait{" "}
                <span className="text-xs font-bold text-black">
                  sahibinden.com anlaşmalı ekspertiz firmaları tarafından
                  yapılan
                </span>{" "}
                ekspertiz raporu varsa seçebilir veya bilgisayarınızdan dosya
                ekleyebilirsiniz.
              </span>
              <span className="text-xs text-gray-700 mt-4">
                Ekleyeceğiniz ekspertiz dosyası{" "}
                <span className="text-xs font-bold text-black">pdf</span>{" "}
                formatında olmalıdır. Dosyanın boyutu en fazla{" "}
                <span className="text-xs font-bold text-black">25 MB</span>{" "}
                olabilir.
              </span>
            </div>

            {file && (
              <div className="mt-4 text-sm ml-8 text-green-600">
                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                yüklendi.
              </div>
            )}
            {error && <div className="mt-4 text-sm text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default PCEInformation;
