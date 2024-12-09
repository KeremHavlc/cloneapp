import React, { useState } from "react";

import Editor from "react-simple-wysiwyg";

const DetailsCard = () => {
  const [html, setHtml] = useState("");

  function onChange(e) {
    setHtml(e.target.value);
  }
  console.log(html);
  return (
    <>
      <div className="ml-[394px] pt-[50px] ">
        <span className="font-bold">İlan Detayları</span>
        <span className="ml-[782px] text-sm text-mavi hover:underline cursor-pointer">
          İlan Vermenin Püf Noktaları
        </span>
      </div>
      <div className="border bg-white w-[1050px] h-[1280px] ml-[394px] mt-2">
        <span className="text-gray-400 text-xs flex justify-end mt-4 mr-4">
          Kişisel verilerin korunması hakkında detaylı bilgiye&nbsp;
          <span className="text-mavi">buradan&nbsp;</span> ulaşabilirsiniz
        </span>

        <div className="flex flex-col ml-[50px] ">
          <span className="font-bold text-sm">
            İlan Başlığı&nbsp;<span className="text-tred">*</span>
          </span>
          <input type="text" className="border-2 mt-4 w-[950px] h-[45px]" />
          <div className="flex flex-row mt-4 gap-2">
            <input
              type="checkbox"
              className="border w-4 h-4 border-gri checked:bg-orange-500"
            />
            <span className="text-xs ">
              <span className="text-yardimci font-bold">
                {" "}
                İLANINIZ FARKLI GÖRÜNSÜN:{" "}
              </span>
              <span className="">Kalın Yazı ve Renkli Çerçeve(299,00TL)</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col ml-[50px] mt-[35px] ">
          <span className="font-bold text-sm">
            Açıklama&nbsp;<span className="text-tred">*</span>
          </span>
          <Editor value={html} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
