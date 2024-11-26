import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-loginback min-h-screen ">
        <div className="flex justify-center pt-[30px]">
          <div className="flex justify-center items-center bg-sari w-[160px] h-[33px] font-bold text-xl select-none">
            <span onClick={() => navigate("/")} className="font-kerem">
              sahibinden.com
            </span>
          </div>
        </div>
        <div className="w-[500px] h-[800px] border ml-[700px] bg-white mt-[20px]">
          <h2 className="flex justify-center mt-[40px] text-2xl font-semibold">
            Hesap aç
          </h2>
          <input
            className="mt-[16px] w-[400px] h-[50px] border ml-[48px] placeholder:pl-4"
            type="text"
            placeholder="E-posta adresi"
          />
          <div className="flex flex-row justify-between">
            <input
              className="mt-[16px] w-[195px] h-[50px] border ml-[48px] placeholder:pl-4"
              type="text"
              placeholder="Ad"
            />
            <input
              className="mt-[16px] w-[195px] h-[50px] border mr-[48px] placeholder:pl-4"
              type="text"
              placeholder="Soyad"
            />
          </div>
          <input
            className="mt-[16px] w-[400px] h-[50px] border ml-[48px] placeholder:pl-4"
            type="password"
            placeholder="Şifre"
          />

          <div className="w-[400px] h-auto bg-loginback border ml-[48px] mt-2 p-4 rounded-md grid grid-cols-2 text-sm">
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
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
