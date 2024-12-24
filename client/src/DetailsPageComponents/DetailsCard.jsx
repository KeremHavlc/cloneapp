import React, { useEffect, useState } from "react";
import Editor from "react-simple-wysiwyg";
import { Select, Space } from "antd";

const DetailsCard = ({ setDetailsCardData }) => {
  const [formData, setFormData] = useState({
    html: "",
    title: "",
    tik: false,
    fiyat: "",
    language: "TR",
    vehicleStatus: "İkinci El",
    km: "",
    color: "",
    garanti: "",
    hasar: "",
    uyruk: "",
    plaka: "",
    sasi: "",
    takas: "",
  });

  useEffect(() => {
    if (
      formData.html ||
      formData.title ||
      formData.tik ||
      formData.fiyat ||
      formData.language ||
      formData.vehicleStatus ||
      formData.km ||
      formData.color ||
      formData.garanti ||
      formData.hasar ||
      formData.uyruk ||
      formData.plaka ||
      formData.sasi ||
      formData.takas
    ) {
      setDetailsCardData((prevData) => [...prevData, formData]);
    }
  }, [formData, setDetailsCardData]);
  // title için handle
  const handleTitle = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      title: value,
    }));
  };

  // tik için handle
  const handleTik = () => {
    setFormData((prevState) => ({
      ...prevState,
      tik: !prevState.tik, // Mevcut değeri tersine çevir
    }));
  };

  // fiyat için handle
  const handleFiyat = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      fiyat: value,
    }));
  };

  // language için handle
  const handleChangeLanguage = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      language: value,
    }));
  };

  // vehicleStatus için handle
  const handleVehicleStatus = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      vehicleStatus: value,
    }));
  };

  // km için handle
  const handleKm = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      km: value,
    }));
  };

  // color için handle
  const handleColor = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      color: value,
    }));
  };

  // garanti için handle
  const handleGaranti = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      garanti: value,
    }));
  };

  // hasar için handle
  const handleHasar = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      hasar: value,
    }));
  };

  // uyruk için handle
  const handleUyruk = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      uyruk: value,
    }));
  };

  // plaka için handle
  const handlePlaka = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      plaka: value,
    }));
  };

  // sasi için handle
  const handleSasi = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      sasi: value,
    }));
  };

  // takas için handle
  const handleTakas = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      takas: value,
    }));
  };
  // html için handle
  const handleHtml = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      html: value,
    }));
  };

  return (
    <>
      <div className="ml-[394px] pt-[50px] ">
        <span className="font-bold">İlan Detayları</span>
        <span className="ml-[782px] text-sm text-mavi hover:underline cursor-pointer">
          İlan Vermenin Püf Noktaları
        </span>
      </div>
      <div className="border bg-white w-[1050px] h-[1750px] ml-[394px] mt-2">
        <span className="text-gray-400 text-xs flex justify-end mt-4 mr-4">
          Kişisel verilerin korunması hakkında detaylı bilgiye&nbsp;
          <span className="text-mavi">buradan&nbsp;</span> ulaşabilirsiniz
        </span>
        {/*İlan Başlığı */}
        <div className="flex flex-col ml-[50px] ">
          <span className="font-bold text-sm">
            İlan Başlığı&nbsp;<span className="text-tred">*</span>
          </span>
          <input
            type="text"
            className="border-2 mt-4 w-[950px] h-[45px]"
            onChange={(e) => handleTitle(e.target.value)}
          />
          <div className="flex flex-row mt-4 gap-2">
            <input
              type="checkbox"
              className="border w-4 h-4 border-gri checked:bg-orange-500"
              onClick={handleTik}
            />
            <span className="text-xs ">
              {/*İlan Başlığı Etiketi */}
              <span className="text-yardimci font-bold">
                {" "}
                İLANINIZ FARKLI GÖRÜNSÜN:{" "}
              </span>
              <span className="">Kalın Yazı ve Renkli Çerçeve(299,00TL)</span>
            </span>
          </div>
        </div>
        {/*Açıklama */}
        <div className="flex flex-col ml-[50px] mt-[35px] ">
          <span className="font-bold text-sm">
            Açıklama&nbsp;<span className="text-tred">*</span>
          </span>
          <div className="h-[330px] w-[951px] mt-4">
            <Editor
              value={formData.html} // Burada değer atanıyor
              onChange={(e) => handleHtml(e.target.value)} // Değişiklik handle fonksiyonuna gidiyor
              className="h-[330px] text-sm"
              placeholder="Bireysel kullanıcılarımızda alıcı ve satıcı güvenliğini sağlamak için açıklama alanına telefon numarası yazılan ilanlar onaylanmamaktadır."
            />
          </div>
        </div>
        {/*Fiyat */}
        <div className="ml-[50px] mt-[50px] flex flex-col">
          <span className="font-bold text-sm">
            Fiyat&nbsp;<span className="text-tred">*</span>
          </span>

          <div className="flex flex-row">
            <input
              type="text"
              className="border-2 w-[300px] h-[40px] mt-4"
              onChange={(e) => handleFiyat(e.target.value)}
            />
            <div className="mt-4 ml-4">
              <Space wrap>
                <Select
                  defaultValue="TR"
                  style={{
                    width: 60,
                    height: 40,
                  }}
                  onChange={handleChangeLanguage}
                  options={[
                    {
                      value: "TR",
                      label: "TR",
                    },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="pt-4">
            <span className="text-xs">
              İkinci El Motorlu Kara Taşıtlarının Ticareti Hakkında Yönetmelik
              kapsamında aracınız için belirleyeceğiniz fiyat, bu aracın Türkiye
              distrübütörünün belirlediği sıfır araç liste fiyatının üzerinde
              olmamalıdır.
            </span>
            <div className="pt-4">
              <span className="text-xs">
                Konunun ilgili kamu kurumları tarafından takip edildiğini,
                Yönetmeliğe aykırı fiyat içeren ilanların sahipleri hakkında
                idari yaptırımların uygulanabileceğini belirtmek isteriz.
              </span>
            </div>
          </div>
        </div>

        <div className="ml-[50px] mt-8 border w-[950px]"></div>
        {/*Araç Durumu */}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Araç Durumu&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <Space wrap className="mt-4">
            <Select
              defaultValue="İkinci El"
              style={{
                width: 300,
                height: 40,
              }}
              onChange={handleVehicleStatus}
              options={[
                {
                  value: "Sıfır",
                  label: "Sıfır",
                },
                {
                  value: "İkinci El",
                  label: "İkinci El",
                },
              ]}
            />
          </Space>
        </div>

        {/*Kilometre */}

        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Km&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="border-2 w-[300px] h-[40px] mt-4"
              onChange={(e) => handleKm(e.target.value)}
            />
          </div>
        </div>

        {/*Renk */}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Renk&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <Space wrap className="mt-4">
            <Select
              defaultValue="Seçiniz"
              style={{
                width: 300,
                height: 40,
              }}
              onChange={handleColor}
              placement="bottomLeft"
              options={[
                { value: "Bej", label: "Bej" },
                { value: "Beyaz", label: "Beyaz" },
                { value: "Bordo", label: "Bordo" },
                { value: "Füme", label: "Füme" },
                { value: "Gri", label: "Gri" },
                { value: "Gümüş Gri", label: "Gümüş Gri" },
                { value: "Kahverengi", label: "Kahverengi" },
                { value: "Kırmızı", label: "Kırmızı" },
                { value: "Lacivert", label: "Lacivert" },
                { value: "Mavi", label: "Mavi" },
                { value: "Mor", label: "Mor" },
                { value: "Pembe", label: "Pembe" },
                { value: "Sarı", label: "Sarı" },
                { value: "Siyah", label: "Siyah" },
                { value: "Şampanya", label: "Şampanya" },
                { value: "Turkuaz", label: "Turkuaz" },
                { value: "Turuncu", label: "Turuncu" },
                { value: "Yeşil", label: "Yeşil" },
              ]}
            />
          </Space>
        </div>

        {/*Garanti */}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Garanti&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <Space wrap className="mt-4">
            <Select
              defaultValue="Seçiniz"
              style={{
                width: 300,
                height: 40,
              }}
              onChange={handleGaranti}
              options={[
                {
                  value: "Evet",
                  label: "Evet",
                },
                {
                  value: "Hayır",
                  label: "Hayır",
                },
              ]}
            />
          </Space>
        </div>

        {/*Ağır Hasar Kayıtlı */}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Ağır Hasar Kayıtlı&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <Space wrap className="mt-4">
            <Select
              defaultValue="Seçiniz"
              style={{
                width: 300,
                height: 40,
              }}
              onChange={handleHasar}
              options={[
                {
                  value: "Evet",
                  label: "Evet",
                },
                {
                  value: "Hayır",
                  label: "Hayır",
                },
              ]}
            />
          </Space>
        </div>

        {/*Plaka / Uyruk*/}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Plaka / Uyruk&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <Space wrap className="mt-4">
            <Select
              defaultValue="Seçiniz"
              style={{
                width: 300,
                height: 40,
              }}
              onChange={handleUyruk}
              options={[
                {
                  value: "Türkiye (TR) Plakalı",
                  label: "Türkiye (TR) Plakalı",
                },
                {
                  value: "Yabancı Plakalı",
                  label: "Yabancı Plakalı",
                },
                {
                  value: "Mavi (MA) Plakalı",
                  label: "Mavi (MA) Plakalı",
                },
              ]}
            />
          </Space>
        </div>

        {/*Araç Plakası */}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Araç Plakası&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="border-2 w-[300px] h-[40px] mt-4"
              onChange={(e) => handlePlaka(e.target.value)}
            />
          </div>
          <div>
            <span className="text-sm text-gray-600">
              Araç plakası yayınlanan ilanda görünmeyecektir.
            </span>
          </div>
        </div>

        {/*Şasi No*/}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Şasi No&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <div>
            <input
              type="text"
              className="border-2 w-[300px] h-[40px] mt-4"
              onChange={(e) => handleSasi(e.target.value)}
            />
          </div>
          <div>
            <span className="text-sm text-gray-600">
              Şasi No yayınlanan ilanda görünmeyecektir.
            </span>
          </div>
        </div>

        {/*Takaslı */}
        <div className="ml-[50px] mt-4 ">
          <div>
            <span className="font-bold text-sm">
              Takaslı&nbsp;<span className="text-tred">*</span>
            </span>
          </div>
          <Space wrap className="mt-4">
            <Select
              defaultValue="Seçiniz"
              style={{
                width: 300,
                height: 40,
              }}
              onChange={handleTakas}
              options={[
                {
                  value: "Evet",
                  label: "Evet",
                },
                {
                  value: "Hayır",
                  label: "Hayır",
                },
              ]}
            />
          </Space>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
