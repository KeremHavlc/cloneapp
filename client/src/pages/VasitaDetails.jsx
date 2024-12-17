import DetailsHeader from "../components/DetailsHeader";
import AddressCard from "../DetailsPageComponents/AddressCard";
import DetailsCard from "../DetailsPageComponents/DetailsCard";
import HWInfo from "../DetailsPageComponents/HWInfo";
import InfoCard from "../DetailsPageComponents/InfoCard";
import PCEInformation from "../DetailsPageComponents/PCEInformation";
import Photos from "../DetailsPageComponents/Photos";

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
        <Photos />
      </div>
    </>
  );
};

export default VasitaDetails;
