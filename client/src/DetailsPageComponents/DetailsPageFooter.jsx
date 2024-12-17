import React from "react";
import VasitaDetailsFooter from "../images/vdfooter.png";
const DetailsPageFooter = () => {
  return (
    <footer className="bg-bgbgbg text-gray-600 py-10 mt-[100px] border-t-2">
      <img
        src={VasitaDetailsFooter}
        className="ml-[425px] select-none object-cover"
        useMap="#image-map"
      />
      <map name="image-map">
        <area shape="rect" coords="221,35,427,84" className="cursor-pointer" />
        <area shape="rect" coords="898,91,992,194" className="cursor-pointer" />
        <area shape="rect" coords="941,32,989,83" className="cursor-pointer" />
      </map>
    </footer>
  );
};

export default DetailsPageFooter;
