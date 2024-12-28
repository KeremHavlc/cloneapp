import React, { useEffect, useState, useRef } from "react";
import { Carousel, Image, Button } from "antd";

const VitrinPhotos = ({ id }) => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4; // Her sayfada gösterilecek fotoğraf sayısı
  const carouselRef = useRef(null); // Carousel bileşeni için referans

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/vasitadetails/get-details-photo/${id}`
      );
      const data = await response.json();

      if (data && data.photoData) {
        // Veriyi virgüle göre ayır ve base64 kısmını al
        const rawImages = data.photoData.split(",");

        // Sadece tek index'lerdeki görselleri al (index 1, 3, 5, ... gibi)
        const filteredImages = rawImages
          .map((img) => img.trim())
          .filter((img, index) => index % 2 === 1) // Tek indeksleri al (index 1, 3, 5, 7, ...)
          .map((img) => img.replace(/^data:image\/\w+;base64,/, "")); // Format kısmını kaldır

        setImages(filteredImages);
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Sayfa numarasına göre fotoğrafları getirme
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage); // Toplam sayfa sayısını hesapla

  // Küçük fotoğrafa tıklanıldığında büyük fotoğrafı güncelle
  const handleThumbnailClick = (index) => {
    carouselRef.current.goTo(index, false);
  };

  return (
    <div className="w-[510px] h-[645px] ml-[394px] mt-2">
      {/* Büyük Fotoğraf */}
      {currentImages.length > 0 ? (
        <>
          <Carousel
            ref={carouselRef}
            autoplay
            className="rounded-lg overflow-hidden"
          >
            {currentImages.map((base64Image, index) => (
              <div key={index}>
                <Image
                  src={`data:image/jpeg;base64,${base64Image}`}
                  alt={`Fotoğraf ${index + 1}`}
                  width="100%"
                  height="500px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>

          {/* Küçük Fotoğraflar */}
          <div className="flex justify-center mt-4 gap-4 flex-wrap">
            {currentImages.map((base64Image, index) => (
              <Image
                key={index}
                src={`data:image/jpeg;base64,${base64Image}`}
                alt={`Fotoğraf ${index + 1}`}
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
                className="rounded-lg cursor-pointer border border-gray-300 hover:border-blue-500"
                preview={false} // Preview özelliğini kaldırıyoruz
                onClick={() => handleThumbnailClick(index)} // Tıklanan küçük fotoğrafın indeksini günceller
              />
            ))}
          </div>

          {/* Sayfa Numaraları ve Önceki, Sonraki Butonları */}
          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Önceki
            </Button>
            <span>
              Sayfa {currentPage} / {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Sonraki
            </Button>
          </div>
        </>
      ) : (
        <span className="text-center text-gray-500">
          Fotoğraflar yükleniyor...
        </span>
      )}
    </div>
  );
};

export default VitrinPhotos;
