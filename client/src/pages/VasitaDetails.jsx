import { useEffect, useState } from "react";
import DetailsHeader from "../components/DetailsHeader";
import AddressCard from "../DetailsPageComponents/AddressCard";
import ContactInfo from "../DetailsPageComponents/ContactInfo";
import DetailsCard from "../DetailsPageComponents/DetailsCard";
import DetailsPageFooter from "../DetailsPageComponents/DetailsPageFooter";
import HWInfo from "../DetailsPageComponents/HWInfo";
import InfoCard from "../DetailsPageComponents/InfoCard";
import PCEInformation from "../DetailsPageComponents/PCEInformation";
import Photoss from "../DetailsPageComponents/Photoss";

const VasitaDetails = () => {
  const [detailsCardData, setDetailsCardData] = useState([]);
  const [addressCardData, setAddressCardData] = useState();
  const [pceInformationCardData, setPceInformationCardData] = useState([]);
  const [ekspertizData, setEkspertizData] = useState();
  const [photoData, setPhotoData] = useState([]);
  const [contactInfoData, setContactInfoData] = useState([]);

  const [securityData, setSecurityData] = useState([]);
  const [hardwareData, setHardwareData] = useState([]);
  const [dishardwareData, setDishardwareData] = useState([]);
  const [mediaData, setMediaData] = useState([]);

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const handleSubmit = async () => {
    // Eğer tüm veriler doluysa devam et
    if (
      !detailsCardData ||
      !city ||
      !district ||
      !neighborhood ||
      !pceInformationCardData ||
      !securityData ||
      !hardwareData ||
      !dishardwareData ||
      !mediaData ||
      !photoData ||
      !contactInfoData
    ) {
      console.log("Eksik veri, işlem yapılamaz.");
      return; // Veriler eksikse submit etmeyin
    }

    const payload = {
      detailsCardData,
      city: city, // city verisini doğrudan gönderiyoruz
      district: district, // district verisini doğrudan gönderiyoruz
      neighborhood: neighborhood,
      pceInformationCardData,
      ekspertizData,
      securityData,
      hardwareData,
      dishardwareData,
      mediaData,
      photoData,
      contactInfoData,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/add-vasita-details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Hata Kodu: ${response.status}`);
      }

      const result = await response.json();
      console.log("Başarılı:", result);
    } catch (error) {
      console.error("Hata oluştu:", error.message);
    }
  };
  return (
    <>
      <DetailsHeader /> {/*+*/}
      <div className="bg-addgri h-full">
        <InfoCard />
        {/*+*/}
        <DetailsCard setDetailsCardData={setDetailsCardData} />
        {/*+*/}
        <AddressCard
          setCity={setCity}
          setDistrict={setDistrict}
          setNeighborhood={setNeighborhood}
        />
        {/*+*/}
        <PCEInformation
          setPceInformationCardData={setPceInformationCardData}
          setEkspertizData={setEkspertizData}
        />
        {/*+*/}
        <HWInfo
          setSecurityData={setSecurityData}
          setHardwareData={setHardwareData}
          setDishardwareData={setDishardwareData}
          setMediaData={setMediaData}
        />
        {/*+*/}
        <Photoss setPhotoData={setPhotoData} />
        {/*+*/}
        <ContactInfo setContactInfoData={setContactInfoData} />
        {/*+*/}

        <div className="flex flex-row ">
          <div className="ml-[903px] mt-[50px] border-2 w-[370px] h-[50px] bg-white shadow-sm rounded-sm">
            <div className="ml-2 flex flex-row">
              <input type="checkbox" className="ml-[10px] mt-[14px]" />
              <div className="mt-[12px]">
                <span className="ml-2 text-mavi hover:underline text-sm cursor-pointer">
                  İlan verme kurallarını
                </span>
                &nbsp;
                <span className="text-black font-bold text-sm">
                  okudum, kabul ediyorum
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[50px] ml-[20px]">
            <button
              onClick={handleSubmit}
              className="text-white bg-mavi h-[50px] w-[150px] rounded-sm shadow-sm text-xl font-bold hover:bg-mavikoyu2"
            >
              Devam
            </button>
          </div>
        </div>
        <div className="">
          <DetailsPageFooter />
        </div>
      </div>
    </>
  );
};

export default VasitaDetails;
