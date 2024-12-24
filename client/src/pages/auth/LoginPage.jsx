import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (values) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      const data = await res.json();
      if (res.status === 200 || res.status === 201) {
        const token = data.token;
        localStorage.setItem("authToken", token);
        navigate("/");
      } else {
        alert("Kullanıcı Adi veya şifre Hatali!");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="w-[500px] h-[670px] border ml-[700px] bg-white mt-[20px]">
          <h2 className="flex justify-center mt-[40px] text-2xl font-semibold">
            Giriş yap
          </h2>
          <input
            className="mt-[16px] w-[400px] h-[50px] border border-gray-300 ml-[48px] placeholder:pl-4 focus:border-cyan-500 focus:outline-none focus:pl-[20px]"
            type="text"
            placeholder="E-posta adresi"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mt-[16px] w-[400px] h-[50px] border border-gray-300 ml-[48px] placeholder:pl-4 focus:border-cyan-500 focus:outline-none"
            type="password"
            placeholder="Şifre"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-[10px] ml-[48px] flex">
            <input type="checkbox" />
            <span className="text-sm ml-2 text-gray-600">
              Oturumum açık kalsın
            </span>
            <button className="text-sm ml-[144px] text-mavi hover:underline">
              Şifremi unuttum
            </button>
          </div>

          <div className="ml-[48px] mt-[20px]">
            <button
              className="flex justify-center items-center border w-[400px] h-[40px] bg-mavi text-white font-bold hover:bg-blue-500"
              onClick={() => onFinish({ email, password })}
            >
              E-posta ile giriş yap
            </button>
          </div>

          <div className="flex justify-center items-center mt-[20px]">
            <span>Henüz hesabın yok mu? &nbsp;</span>
            <button
              onClick={() => navigate("/register")}
              className="text-mavi hover:underline"
            >
              Hesap aç&nbsp;➤
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
            <span className="text-black mt-[12px]">
              QR kod ile mobil uygulamadan&nbsp;
              <span className="text-mavi hover:underline">
                giriş yap&nbsp;➤
              </span>
            </span>
          </div>
        </div>

        <div className="ml-[700px] w-[498px] h-[50px] text-xs mt-[20px] flex flex-col">
          <span className="text-gray-500">
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

export default LoginPage;
