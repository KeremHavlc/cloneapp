import React, { useEffect, useState } from "react";

const AddressCard = () => {
  const [selectedCity, setSelectedCity] = useState(null); // Seçilen şehir
  const [cities, setCities] = useState([]); // Şehir verisi
  const [selectedDistrict, setSelectedDistrict] = useState(null); // Seçilen ilçe
  const [districts, setDistricts] = useState([]); // İlçe verisi
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(null); // Seçilen Mahalle
  const [neighborhoods, setNeighborhoods] = useState([]); // Mahalle Verisi

  const [adres, setAdres] = useState(""); //Genel Adres Bilgisi

  useEffect(() => {
    let fullAdres = "";
    if (selectedCity) {
      fullAdres += selectedCity.name;
    }

    if (selectedDistrict) {
      fullAdres += `, ${selectedDistrict.name}`;
    }

    if (selectedNeighborhood) {
      fullAdres += `, ${selectedNeighborhood.name}`;
    }

    setAdres(fullAdres);
    console.log("Güncellenmiş Adres: ", fullAdres);
  }, [selectedCity, selectedDistrict, selectedNeighborhood]);

  const [open, setOpen] = useState(false); // Mahalle arama açma/kapama
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Şehir verilerini çekeriz
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/city/cities/");
        const data = await res.json();
        setCities(data);
      } catch (error) {
        console.log("Hata", error);
      }
    };
    fetchCity();
  }, []);

  // İlçeleri şehir seçildikten sonra çekeriz
  useEffect(() => {
    if (selectedCity) {
      const fetchDistricts = async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/api/city/cities/${selectedCity._id}/districts`
          );
          const data = await res.json();
          setDistricts(data);
        } catch (error) {
          console.log("Hata", error);
        }
      };
      fetchDistricts();
    }
  }, [selectedCity]); // selectedCity değiştiğinde çalışacak

  // Mahalleleri İlçe seçildikten sonra çekeriz
  useEffect(() => {
    if (selectedDistrict) {
      const fetchNeighborhoods = async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/api/city/districts/${selectedDistrict.name}/neighborhoods`
          );
          const data = await res.json();

          // neighborhood verisinin bir dizi olup olmadığını kontrol et
          if (Array.isArray(data)) {
            setNeighborhoods(data); // Mahalle verisi dizi ise set et
          } else {
            console.error("Mahalle verisi bir dizi değil:", data);
            setNeighborhoods([]); // Eğer dizi değilse, boş bir dizi ata
          }
        } catch (error) {
          console.log("Hata", error);
        }
      };
      fetchNeighborhoods();
    }
  }, [selectedDistrict]); // selectedDistrict değiştiğinde çalışacak

  // Şehir değişiminde
  const handleCityChange = (value) => {
    const city = cities.find((c) => c.name === value);
    setSelectedCity(city || null);
  };

  // İlçe seçildiğinde
  const handleDistrict = (value) => {
    const district = districts.find((d) => d.name === value);
    setSelectedDistrict(district || null);
  };

  // Mahalle seçildiğinde
  const handleNeighborhood = (value) => {
    const neighborhood = neighborhoods.find((n) => n.name === value);
    setSelectedNeighborhood(neighborhood || null);
  };

  return (
    <>
      <div>
        <div className="ml-[394px] pt-[120px] ">
          <span className="font-bold">Adres Bilgileri</span>
          <span className="ml-[897px] text-sm text-mavi hover:underline cursor-pointer">
            Türkiye
          </span>
        </div>

        <div className="border bg-white w-[1050px] h-[175px] ml-[394px] mt-2">
          <div className="flex flex-row justify-center mt-[22px] gap-4">
            {/* Şehir Seçimi */}
            <div className="flex flex-col">
              <span className="font-bold text-sm">
                İl&nbsp;<span className="text-tred">*</span>
              </span>
              <select
                className="border mt-2 w-[300px] h-[40px]"
                value={selectedCity?.name || ""}
                onChange={(e) => handleCityChange(e.target.value)}
              >
                <option value="">Şehir Seçin</option>
                {cities.map((city) => (
                  <option key={city._id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* İlçe Seçimi */}
            <div className="flex flex-col">
              <span className="font-bold text-sm">
                İlçe&nbsp;<span className="text-tred">*</span>
              </span>
              <select
                className="border mt-2 w-[300px] h-[40px]"
                value={selectedDistrict?.name || ""}
                onChange={(e) => handleDistrict(e.target.value)}
              >
                <option value="">İlçe Seçin</option>
                {districts.map((district) => (
                  <option key={district._id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mahalle Seçimi */}
            <div className="flex flex-col">
              <span className="font-bold text-sm">
                Mahalle&nbsp;<span className="text-tred">*</span>
              </span>
              <select
                className="border mt-2 w-[300px] h-[40px]"
                value={selectedNeighborhood?.name || ""}
                onChange={(e) => handleNeighborhood(e.target.value)}
              >
                <option value="">Mahalle Seçin</option>
                {neighborhoods.map((neighborhood) => (
                  <option key={neighborhood._id} value={neighborhood.name}>
                    {neighborhood.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 ml-[58px]">
            {open ? (
              <div>
                <input
                  type="text"
                  className="w-[616px] h-[40px] border pl-2 open:border-blue-500"
                  placeholder="Mahalle, semt veya ilçe yazınız."
                />
                <button
                  onClick={handleClose}
                  className="ml-4 text-xl text-gray-600 font-semibold"
                >
                  X
                </button>
              </div>
            ) : (
              <span
                onClick={handleOpen}
                className="text-sm hover:underline text-mavi cursor-pointer"
              >
                Kelime ile mahalle, semt veya ilçe aramak için tıklayınız.
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
