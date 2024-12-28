import React from "react";
import Header from "../components/Header";
import VitrinHeader from "../VitrinComponents/VitrinHeader";
import VitrinTitle from "../VitrinComponents/VitrinTitle";
import VitrinPhotos from "../VitrinComponents/VitrinPhotos";
import VitrinPrice from "../VitrinComponents/VitrinPrice";
import VitrinAddress from "../VitrinComponents/VitrinAddress";
import VitrinInfo from "../VitrinComponents/VitrinInfo";
import VitrinUser from "../VitrinComponents/VitrinUser";
import VitrinHtml from "../VitrinComponents/VitrinHtml";
import VitrinHwp from "../VitrinComponents/VitrinHwp";
import Footer from "../components/Footer";
import VitrinFooterText from "../VitrinComponents/VitrinFooterText";

const VasitaVitrinPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Flexbox düzeni ve min-h-screen kullanarak sayfa yüksekliğini minimum ekran boyutuna ayarlıyoruz */}
        <Header />
        <VitrinHeader />
        <VitrinTitle />
        <div className="flex flex-row">
          <VitrinPhotos />
          <div className="flex flex-col">
            <VitrinPrice />
            <VitrinAddress />
            <VitrinInfo />
          </div>
          <VitrinUser />
        </div>
        <VitrinHtml />
        <VitrinHwp />
        <VitrinFooterText />
        <Footer className="mt-auto" />
      </div>
    </>
  );
};

export default VasitaVitrinPage;
