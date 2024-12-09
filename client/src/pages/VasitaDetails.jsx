import DetailsHeader from "../components/DetailsHeader";
import DetailsCard from "../DetailsPageComponents/DetailsCard";
import InfoCard from "../DetailsPageComponents/InfoCard";

const VasitaDetails = () => {
  return (
    <>
      <DetailsHeader />
      <div className="bg-addgri h-full">
        <InfoCard />
        <DetailsCard/>
      </div>
    </>
  );
};

export default VasitaDetails;
