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
  return (
    <>
      <DetailsHeader />
      <div className="bg-addgri h-full">
        <InfoCard />
        <DetailsCard />
        <AddressCard />
        <PCEInformation />
        <HWInfo />
        <Photoss />
        <ContactInfo />

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
            <button className="text-white bg-mavi h-[50px] w-[150px] rounded-sm shadow-sm text-xl font-bold hover:bg-mavikoyu2">
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
