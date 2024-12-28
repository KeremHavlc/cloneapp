import React, { useEffect, useState } from "react";

const Vitrin = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-vitrin"
      );
      if (!response.ok) {
        throw new Error("Veri bulunamadı!");
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <div className="mt-[42px] pl-6 w-[850px]">
        <div className="text-sm border-b-2 flex justify-between pb-2">
          <h3>Anasayfa Vitrini</h3>
          <button className="text-tmavi hover:underline">
            Tüm vitrin ilanlarını göster
          </button>
        </div>

        {loading ? (
          <p className="mt-4 text-gray-500">Yükleniyor...</p>
        ) : error ? (
          <p className="mt-4 text-red-500">Hata: {error}</p>
        ) : fetchData.length === 0 ? (
          <p className="mt-4 text-gray-500">Vitrin verisi bulunamadı.</p>
        ) : (
          <div className="grid grid-cols-5 gap-4 mt-4">
            {fetchData.map((item, index) => (
              <button
                key={index}
                className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image || "/images/default.jpg"}
                  alt={item.title || "Ürün"}
                  className="w-full h-[120px] object-cover"
                />
                <h3 className="p-2 text-center text-sm font-medium truncate">
                  {item.title || "Başlık Yok"}
                </h3>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Vitrin;
