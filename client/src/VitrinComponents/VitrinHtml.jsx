import React, { useEffect, useState } from "react";
import { Collapse } from "antd";

const VitrinHtml = () => {
  const [htmlFetch, setHtmlFetch] = useState("");

  const fetchingData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vasitadetails/get-details-html/676f6668f29aa130115c2d7d"
      );
      if (!response.ok) {
        throw new Error("Bir Hata Oluştu!");
      }
      const data = await response.json();
      setHtmlFetch(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <div className="ml-[394px] mt-8 ">
        <div className="flex flex-row gap-4">
          <div className="w-[138px] h-[38px] border border-yellow-500 bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-lg rounded-t-[4px] flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">
              İlan Detayları
            </span>
          </div>
          <div className="w-[90px] h-[38px] border border-gray-400 bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-t-[4px] flex items-center justify-center">
            <span className="text-tmavi font-bold text-sm">Konumu</span>
          </div>
          <div className="w-[138px] h-[38px]  border border-gray-400 bg-gradient-to-b from-white to-gray-100  shadow-lg rounded-t-[4px] flex items-center justify-center">
            <span
              className="text-tmavi
             font-bold text-sm"
            >
              Teknik Özellikler
            </span>
          </div>
        </div>
        <div className="w-[1150px] h-[2px] mt-[2px] border-2 border-vitrinturuncu"></div>
      </div>

      <div>
        <Collapse
          size="small"
          expandIconPosition="end"
          defaultActiveKey={["1"]}
          items={[
            {
              key: "1",
              label: <span className="text-black font-bold">Açıklama</span>,
              children: (
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: htmlFetch.html }} //html etiketlerini doğrudan doma eklemek için kullanılırmış.:D
                />
              ),
            },
          ]}
          className="w-[1150px]  mt-4 ml-[394px] rounded-none"
        />
      </div>
    </>
  );
};

export default VitrinHtml;
