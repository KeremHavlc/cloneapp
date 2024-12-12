import DetailsHeader from "../components/DetailsHeader";
import AddressCard from "../DetailsPageComponents/AddressCard";
import DetailsCard from "../DetailsPageComponents/DetailsCard";
import InfoCard from "../DetailsPageComponents/InfoCard";
import PCEInformation from "../DetailsPageComponents/PCEInformation";

const VasitaDetails = () => {
  return (
    <>
      <DetailsHeader />
      <div className="bg-addgri h-full">
        <InfoCard />
        <DetailsCard />
        <AddressCard />
        <PCEInformation />
      </div>
    </>
  );
};

export default VasitaDetails;
