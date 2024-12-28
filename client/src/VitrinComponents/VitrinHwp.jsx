import React from "react";
import { Collapse } from "antd";
import VitrinPCE from "./VitrinHwpComponents/VitrinPCE";
import VitrinSecurity from "./VitrinHwpComponents/VitrinSecurity";
import VitrinHardware from "./VitrinHwpComponents/VitrinHardware";
import VitrinDisHardware from "./VitrinHwpComponents/VitrinDisHardware";
import VitrinMedia from "./VitrinHwpComponents/VitrinMedia";

const VitrinHwp = ({ _id }) => {
  const id = _id;
  return (
    <>
      <div className="">
        <div>
          <Collapse
            defaultActiveKey={["1"]}
            size="small"
            expandIconPosition="end"
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
                      <VitrinPCE id={id} />
                    </div>
                    <div className="mt-4">
                      <span className="text-blue-400 font-semibold ">
                        Güvenlik
                      </span>
                      <VitrinSecurity id={id} />
                    </div>
                    <div className="mt-4">
                      <span className="text-blue-400 font-semibold ">
                        İç Donanım
                      </span>
                      <VitrinHardware id={id} />
                    </div>
                    <div className="mt-4">
                      <span className="text-blue-400 font-semibold ">
                        Dış Donanım
                      </span>
                      <VitrinDisHardware id={id} />
                    </div>
                    <div className="mt-4">
                      <span className="text-blue-400 font-semibold ">
                        Mutlimedya
                      </span>
                      <VitrinMedia id={id} />
                    </div>
                  </div>
                ),
              },
            ]}
            className="w-[1150px] mt-4 ml-[394px] rounded-none"
          />
        </div>
      </div>
    </>
  );
};

export default VitrinHwp;
