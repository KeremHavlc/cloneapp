import DetailsHeader from "../components/DetailsHeader";

const VasitaDetails = () => {
  return (
    <>
      <DetailsHeader />
      <div className="bg-addgri h-screen">
        <div className="ml-[394px] pt-[120px] ">
          <span className="font-bold">Seçtiğiniz Araca Ait Bilgiler</span>
          <span className="ml-[785px] text-mavi hover:underline cursor-pointer">
            Değiştir
          </span>
        </div>
        <div className="border bg-white w-[1050px] h-[280px] ml-[394px] mt-2"></div>
      </div>
    </>
  );
};

export default VasitaDetails;
