import React from "react";
import { Collapse } from "antd";
import VitrinPCE from "./VitrinHwpComponents/VitrinPCE";
import VitrinSecurity from "./VitrinHwpComponents/VitrinSecurity";

const VitrinHwp = () => {
  return (
    <>
      <div className="">
        <div>
          <Collapse
            size="small"
            expandIconPosition="right"
            items={[
              {
                key: "1",
                label: <span className="text-black font-bold">Özellikler</span>,
                children: (
                  <div>
                    {" "}
                    <div>
                      <span className="text-blue-400 font-semibold">
                        Boyalı veya Değişen Parça
                      </span>
                      <VitrinPCE />
                    </div>
                    <div>
                      <span className="text-blue-400 font-semibold">
                        Güvenlik
                      </span>
                      <VitrinSecurity />
                    </div>
                  </div>
                ),
              },
            ]}
            className="w-[1150px]  mt-4 ml-[394px]"
          />
        </div>
      </div>

      <div className="flex flex-col mt-56">
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
        <span>kerem</span>
      </div>
    </>
  );
};

export default VitrinHwp;
