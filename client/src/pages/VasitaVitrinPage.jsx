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

const VasitaVitrinPage = () => {
  return (
    <>
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
    </>
  );
};

export default VasitaVitrinPage;
