import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="ml-[394px] pt-[50px] w-[1050px]">
        <span className="font-bold text-lg">İletişim Bilgileri</span>
      </div>

      <div className="border bg-white w-[1050px] h-[500px] mt-4 p-4 ml-[394px]">
        <div className="ml-[40px] pt-[35px]">
          <span className="font-bold text-black text-xl">
            Size nasıl ulaşılsın ?
          </span>
        </div>

        <div className="ml-[200px] mt-[40px] flex flex-row">
          <input type="checkbox" className="" />
          <span className="ml-5 text-gray-700 font-semibold">
            Telefon Numaram ile
          </span>
        </div>

        <div className="w-[500px] h-[200px] border mt-2 ml-[235px]">
          <div className="mt-4 ml-4 flex flex-row gap-4">
            <span className="text-gray-600 text-sm mt-[5px]">
              İlanınızda Görülecek Ad / Soyad
            </span>
            <span className="text-gray-600 text-base ml-16">Kerem H.</span>
          </div>

          <div className="border w-[470px] ml-[15px] mt-3">
            <span></span>
          </div>

          <div className="mt-4 ml-4 flex flex-row gap-4">
            <span className="text-gray-600 text-sm mt-[5px]">Cep Telefonu</span>
            <span className="text-gray-600 text-base ml-[175px]">
              +90-0536-990-1845
            </span>
          </div>

          <div className="border w-[470px] ml-[15px] mt-3">
            <span></span>
          </div>

          <div className="mt-4 ml-4 flex flex-row gap-4">
            <span className="text-tmavi text-sm hover:underline ">
              İletişim bilgilerini değiştir
            </span>
          </div>
        </div>
        <div className="border w-[950px] ml-[30px] mt-8">
          <span></span>
        </div>

        <div className="ml-[30px] mt-4">
          <div className="flex flex-row">
            <input type="checkbox" />
            <span className="ml-2 text-sm text-black font-normal">
              sahibinden.com üzerinden diğer kullanıcılar bana mesaj
              gönderebilsinler.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
