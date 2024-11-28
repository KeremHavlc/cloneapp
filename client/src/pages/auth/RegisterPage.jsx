import React from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-loginback min-h-screen flex flex-col justify-between">
        <div className="flex justify-center pt-[30px]">
          <div className="flex justify-center items-center bg-sari w-[160px] h-[33px] font-bold text-xl select-none">
            <button onClick={() => navigate("/")} className="font-kerem">
              sahibinden.com
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[900px] border ml-[700px] bg-white mt-[20px]">
          <h2 className="flex justify-center mt-[40px] text-2xl font-semibold">
            Hesap aç
          </h2>
          <input
            className="mt-[16px] w-[400px] h-[50px] border ml-[48px] placeholder:pl-4 border-gray-300 focus:border-cyan-500 focus:outline-none"
            type="text"
            placeholder="E-posta adresi"
          />
          <div className="flex flex-row justify-between">
            <input
              className="mt-[16px] w-[195px] h-[50px] border ml-[48px] placeholder:pl-4 border-gray-300 focus:border-cyan-500 focus:outline-none"
              type="text"
              placeholder="Ad"
            />
            <input
              className="mt-[16px] w-[195px] h-[50px] border mr-[48px] placeholder:pl-4 border-gray-300 focus:border-cyan-500 focus:outline-none"
              type="text"
              placeholder="Soyad"
            />
          </div>
          <input
            className="mt-[16px] w-[400px] h-[50px] border ml-[48px] placeholder:pl-4 border-gray-300 focus:border-cyan-500 focus:outline-none"
            type="password"
            placeholder="Şifre"
          />

          <div className="w-[400px] h-[120px] bg-loginback border ml-[48px] mt-2 p-4 rounded-md grid grid-cols-2 text-xs">
            <div className="flex items-center mb-2">
              <span className="text-red-500">✗</span>
              <p className="ml-2 text-sm text-gray-700"> En az 1 küçük harf</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-red-500">✗</span>
              <p className="ml-2 text-sm text-gray-700">En az 8 karakter</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-red-500">✗</span>
              <p className="ml-2 text-sm text-gray-700">En az 1 büyük harf</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-red-500">✗</span>
              <p className="ml-2 text-sm text-gray-700">En az 1 rakam</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-sm text-green-700">
                Ad, soyad veya e-posta adresinizi içermez
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500">✓</span>
              <p className="ml-2 text-sm text-green-700">
                3 aynı harf veya rakam yan yana kullanılamaz
              </p>
            </div>
          </div>

          <div className="mt-[16px] ml-[48px]">
            <input type="checkbox" />
            <span className="text-sm ml-2">
              {" "}
              <span className="text-mavi hover:underline">
                Bireysel Hesap Sözleşmesi
              </span>{" "}
              ve Ekleri'ni kabul ediyorum.
            </span>
          </div>

          <div className="ml-[48px]">
            <input type="checkbox" />
            <span className="text-sm ml-2">
              {" "}
              <span>
                İletişim bilgilerime kampanya, tanıtım ve reklam içerikli ticari
                elektronik ileti gönderilmesine, bu amaçla kişisel verilerimin
                işlenmesine ve tedarikçilerinizle paylaşılmasına izin veriyorum.
              </span>
            </span>
          </div>

          <div className="ml-[48px] mt-[20px]">
            <button className="flex justify-center items-center border w-[400px] h-[40px] bg-mavi text-white font-bold hover:bg-blue-500 ">
              Hesap Aç
            </button>
          </div>

          <div className="flex justify-center items-center mt-[20px]">
            <span>Zaten hesabın var mı ? &nbsp;</span>
            <button
              onClick={() => navigate("/login")}
              className="text-mavi hover:underline"
            >
              Giriş Yap&nbsp;➤
            </button>
          </div>

          <div className="mt-[16px] flex items-center justify-center gap-4">
            <div className="border-t border-gray-300 w-[150px]"></div>
            <span className="text-gray-500">VEYA</span>
            <div className="border-t border-gray-300 w-[150px]"></div>
          </div>

          <div className="ml-[48px] mt-[20px]">
            <button className="flex gap-4 justify-center items-center border w-[400px] h-[40px] bg-white text-black hover:bg-gray-100">
              <FcGoogle className="text-2xl" />
              Google ile hesap aç
            </button>
          </div>

          <div className="ml-[48px] mt-[20px]">
            <button className="flex gap-4 justify-center items-center border w-[400px] h-[40px] bg-white text-black hover:bg-gray-100">
              <FaApple className="text-2xl" />
              Apple ile hesap aç
            </button>
          </div>

          <div className="ml-[48px] flex justify-center items-center mt-[20px] text-sm">
            <span className="text-gray-600">
              Google veya Apple kimliğinizle bir sonraki adıma geçmeniz halinde{" "}
              <span className="text-mavi hover:underline">
                Bireysel Hesap Sözleşmesi
              </span>{" "}
              ve Ekleri'ni kabul etmiş sayılırsınız.
            </span>
          </div>
          <div className="text-m ml-[48px] flex justify-center items-center mt-[20px]">
            <span className="text-black">
              İşletme sahibi misin?&nbsp;
              <span className="text-mavi hover:underline">
                Kurumsal hesap aç&nbsp;➤
              </span>
            </span>
          </div>
        </div>
        <div className="ml-[700px] w-[498px] h-[50px] text-xs mt-[20px] flex flex-col">
          <span className="text-gray-500">
            Bu sayfadaki bilgiler sahibinden.com hesabı ve fatura gönderimi
            dahil olmak üzere tüm bilgilendirmelerimiz için alınmaktadır.
            Tarafınızca sağlanmış olan kişisel verileriniz hesap açma esnasında
            kimlik doğrulama tercihinize bağlı olarak Google veya Apple
            vasıtasıyla işlenebilecektir. Kişisel verilerin korunması hakkında
            detaylı bilgiye&nbsp;
            <span className="text-black hover:underline">buradan</span>{" "}
            ulaşabilirsiniz.
          </span>
          <span className="mt-[6px] text-gray-500">
            Bu site reCAPTCHA ile korunmaktadır.&nbsp;
            <span className="text-black hover:underline">
              Google Gizlilik Politikası
            </span>{" "}
            ve&nbsp;
            <span className="text-black hover:underline">
              Kullanım Koşulları
            </span>{" "}
            geçerlidir.
          </span>
        </div>
        <footer className="bg-gray-100 border-t-2 py-4 text-center text-sm mt-[150px] text-gray-600">
          <p>
            © 2024 sahibinden.com. Tüm hakları saklıdır. |{" "}
            <a href="#" className="text-mavi hover:underline">
              Gizlilik Politikası
            </a>{" "}
            |{" "}
            <a href="#" className="text-mavi hover:underline">
              Kullanım Koşulları
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default RegisterPage;
