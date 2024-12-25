import React, { useState } from "react";
import Header from "../components/Header";
import VitrinHeader from "../VitrinComponents/VitrinHeader";
import VitrinTitle from "../VitrinComponents/VitrinTitle";
import VitrinPhotos from "../VitrinComponents/VitrinPhotos";
import VitrinPrice from "../VitrinComponents/VitrinPrice";
import VitrinAddress from "../VitrinComponents/VitrinAddress";
import VitrinInfo from "../VitrinComponents/VitrinInfo";

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
      </div>
    </>
  );
};

export default VasitaVitrinPage;
