import React, { useState } from "react";

const DamageModal = () => {
  // State for selected radio button
  const [selectedDamage, setSelectedDamage] = useState("");

  // State for select dropdown value
  const [details, setDetails] = useState("seçiniz");

  const handleRadioChange = (e) => {
    setSelectedDamage(e.target.value); // Update selected damage type
  };

  const handleSelectChange = (e) => {
    setDetails(e.target.value); // Update the selected detail
  };

  return (
    <>
      <div className="mt-2 flex flex-row">
        <label className="mr-4 ml-1 flex items-center">
          <input
            type="radio"
            name="area"
            value="Orijinal"
            className="peer hidden"
            onChange={handleRadioChange}
          />
          <span className="w-[15px] h-[15px] border-2 border-gray-400 rounded-full flex items-center justify-center mr-2 peer-checked:bg-orjinal peer-checked:border-transparent"></span>
          Orijinal
        </label>

        <label className="mr-4 ml-1 flex items-center">
          <input
            type="radio"
            name="area"
            value="lokal boyalı"
            className="peer hidden"
            onChange={handleRadioChange}
          />
          <span className="w-[15px] h-[15px] border-2 border-gray-400 rounded-full flex items-center justify-center mr-2 peer-checked:bg-lokal peer-checked:border-transparent"></span>
          Lokal Boyalı
        </label>

        <label className="mr-4 ml-1 flex items-center">
          <input
            type="radio"
            name="area"
            value="boyalı"
            className="peer hidden"
            onChange={handleRadioChange}
          />
          <span className="w-[15px] h-[15px] border-2 border-gray-400 rounded-full flex items-center justify-center mr-2 peer-checked:bg-boyali peer-checked:border-transparent"></span>
          Boyalı
        </label>

        <label className="mr-4 ml-1 flex items-center">
          <input
            type="radio"
            name="area"
            value="değişen"
            className="peer hidden"
            onChange={handleRadioChange}
          />
          <span className="w-[15px] h-[15px] border-2 border-gray-400 rounded-full flex items-center justify-center mr-2 peer-checked:bg-degisen peer-checked:border-transparent"></span>
          Değişen
        </label>
      </div>

      <div className="mt-5 ml-1">
        <label className="font-bold text-sm">Detay (Opsiyonel)</label>
        <select
          className="w-[370px] h-[50px] mt-1 border"
          value={details}
          onChange={handleSelectChange}
        >
          <option value="seçiniz">Seçiniz</option>
          <option value="hafif çizik">Hafif Çizik</option>
          <option value="derin çizik">Derin Çizik</option>
          <option value="hafif ezik">Hafif Ezik</option>
          <option value="dolu çizik">Dolu Çizik</option>
          <option value="sürtme">Sürtme</option>
          <option value="taş izi">Taş İzi</option>
          <option value="göçük">Göçük</option>
          <option value="kırık / çatlak">Kırık / Çatlak</option>
          <option value="yırtık">Yırtık</option>
        </select>
      </div>
    </>
  );
};

export default DamageModal;
