import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate hook'u eklendi

const Vitrin = () => {
  const [fetchHTMLData, setFetchHTMLData] = useState([]);
  const [photoDataList, setPhotoDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // navigate fonksiyonu

  const fetchData = async () => {
    try {
      const [htmlResponse, photoResponse] = await Promise.all([
        fetch("http://localhost:5000/api/vasitadetails/get-details-vitrinHTML"),
        fetch(
          "http://localhost:5000/api/vasitadetails/get-details-vitrinPHOTO"
        ),
      ]);

      if (!htmlResponse.ok || !photoResponse.ok) {
        throw new Error("Veri bulunamadı!");
      }

      const htmlData = await htmlResponse.json();
      const photoData = await photoResponse.json();

      const modifiedData = htmlData.map((item) => ({
        _id: item._id,
        lastDetail:
          item.detailsCardData?.[item.detailsCardData.length - 1] || "Veri Yok",
      }));

      setFetchHTMLData(modifiedData);
      setPhotoDataList(photoData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const extractPlainText = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    return tempDiv.textContent || tempDiv.innerText || "Veri Yok";
  };

  const combinedData = fetchHTMLData.map((item) => {
    let plainText = "Veri Yok";

    if (typeof item.lastDetail === "object" && item.lastDetail.html) {
      plainText = extractPlainText(item.lastDetail.html);
    } else if (typeof item.lastDetail === "string") {
      plainText = item.lastDetail;
    }

    const truncatedText =
      plainText.length > 20 ? `${plainText.slice(0, 20)}...` : plainText;

    const photoItem = photoDataList.find((photo) => photo._id === item._id);
    return {
      ...item,
      lastDetail: truncatedText,
      photoData: photoItem
        ? `data:image/jpeg;base64,${photoItem.photoData}`
        : "/images/default.jpg",
    };
  });

  useEffect(() => {
    fetchData();
  }, []);

  // Tıklanan öğeye göre yönlendirme işlemi
  const handleItemClick = (id) => {
    navigate(`/vasitavitrin/${id}`); // İlgili id ile yönlendirme
  };

  return (
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
      ) : combinedData.length === 0 ? (
        <p className="mt-4 text-gray-500">Vitrin verisi bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-5 gap-4 mt-4">
          {combinedData.map((item, index) => (
            <div
              key={index}
              className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleItemClick(item._id)} // Tıklama olayını ekledik
            >
              <img
                src={item.photoData}
                alt={`Vitrin Resmi ${item._id}`}
                className="w-full h-[120px] aspect-[4/3] object-cover"
                loading="lazy"
              />
              <h3 className="p-2 text-center text-sm font-medium truncate">
                {item.lastDetail}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vitrin;
