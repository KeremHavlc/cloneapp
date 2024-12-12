import React, { useState } from "react";
import Editor from "react-simple-wysiwyg";
import { Select, Space } from "antd";

const DetailsCard = () => {
  const [html, setHtml] = useState("");

  function onChange(e) {
    setHtml(e.target.value);
  }

  const [title, setTitle] = useState("");
  const [tik, setTik] = useState(false);
  const [fiyat, setFiyat] = useState("");
  const [language, setLanguage] = useState("TR");
  const [vehicleStatus, setVehicleStatus] = useState("İkinci El");
  const [km, setKm] = useState("");
  const [color, setColor] = useState("");
  const [garanti, setGaranti] = useState("");
  const [hasar, setHasar] = useState("");
  const [uyruk, setUyruk] = useState("");
  const [plaka, setPlaka] = useState("");
  const [sasi, setSasi] = useState("");
  const [takas, setTakas] = useState("");

  const handleTitle = (value) => {
    setTitle(value);
  };
  const handleTik = () => {
    setTik(true);
  };
  const handleFiyat = (value) => {
    setFiyat(value);
  };
  const handleChangeLanguage = (value) => {
    setLanguage(value);
  };
  const handleVehicleStatus = (value) => {
    setVehicleStatus(value);
  };
  const handleKm = (value) => {
    setKm(value);
  };
  const handleColor = (value) => {
    setColor(value);
  };
  const handleGaranti = (value) => {
    setGaranti(value);
  };
  const handleHasar = (value) => {
    setHasar(value);
  };
  const handleUyruk = (value) => {
    setUyruk(value);
  };
  const handlePlaka = (value) => {
    setPlaka(value);
  };
  const handleSasi = (value) => {
    setSasi(value);
  };
  const handleTakas = (value) => {
    setTakas(value);
  };
  console.log("Başlık : ", title);
  console.log("Tik : ", tik);
  console.log("Fiyat : ", fiyat);
  console.log("Dil : ", language);
  console.log("Araç Durumu :", vehicleStatus);
  console.log("Km : ", km);
  console.log("Renk: ", color);
  console.log("Garanti :", garanti);
  console.log("HasarDurumu :", hasar);
  console.log("Plaka Uyruk : ", uyruk);
  console.log("Plaka : ", plaka);
  console.log("Şasi No : ", sasi);
  console.log("Takas : ", takas);

  console.log("Açıklama", html);
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
              value={html}
              onChange={onChange}
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
