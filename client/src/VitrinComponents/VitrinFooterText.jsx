import React from "react";

const VitrinFooterText = () => {
  return (
    <>
      <div className="ml-[394px] mt-2 border border-gray-300 w-[1151px] h-[105px]">
        <div className="mt-4 ml-6 flex flex-col">
          <span className="font-bold text-xs ">
            Vasıta alırken/kiralarken bunlara dikkat edin!
          </span>
          <span className="text-xs mt-2">
            sahibinden.com, tüm kullanıcılar için tam bir güvenlik sağlamayı
            amaç edinmiştir. Siz de kendi güvenliğiniz ve diğer kullanıcılar
            için, satın almak ya da kiralamak istediğiniz vasıta ile ilgili
            kesin karar vermeden ön ödeme yapmamaya, avans ya da kapora
            ödememeye özen gösteriniz. İlan sahiplerinin ilanlarda belirttiği
            herhangi bir bilgi ya da görselin gerçeği yansıtmadığını
            düşünüyorsanız veya ilan sahiplerinin hesap profillerindeki
            bilgilerin doğru olmadığını düşünüyorsanız, lütfen bize{" "}
            <span className="text-tmavi hover:underline cursor-pointer">
              haber veriniz.
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default VitrinFooterText;
