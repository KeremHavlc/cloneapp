import DetailsHeader from "../components/DetailsHeader";
import AddressCard from "../DetailsPageComponents/AddressCard";
import DetailsCard from "../DetailsPageComponents/DetailsCard";
import InfoCard from "../DetailsPageComponents/InfoCard";

const VasitaDetails = () => {
  return (
    <>
      <DetailsHeader />
      <div className="bg-addgri h-full">
        <InfoCard />
        <DetailsCard />
        <AddressCard />
      </div>
    </>
  );
};

export default VasitaDetails;
