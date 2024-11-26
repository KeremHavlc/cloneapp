import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-10 mt-[600px] border-t-2">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-5 ">
          <div>
            <h4 className="text-gray-800 font-semibold mb-2">Kurumsal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sürdürülebilirlik
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  İnsan Kaynakları
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Haberler
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Site Haritası
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-2">Hizmetlerimiz</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Doping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  S - Param Güvende
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Güvenli e-Ticaret (GeT)
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Toplu Ürün Girişi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reklam
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mobil
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Auto King
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-2">Mağazalar</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Neden Mağaza?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mağaza Açmak İstiyorum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-2">
              Gizlilik ve Kullanım
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Güvenli Alışveriş İpuçları
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sözleşmeler ve Kurallar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hesap Sözleşmesi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kişisel Verilerin Korunması
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Çerez Yönetimi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Yardım ve İşlem Rehberi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 font-semibold mb-2">
              Bizi Takip Edin
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm">
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-red-500">☎</span>
              <span>7/24 Müşteri Hizmetleri - 0 850 222 44 44</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">❓</span>
              <a href="#" className="hover:underline">
                Yardım Merkezi - yardim.sahibinden.com
              </a>
            </div>
          </div>
          <p className="text-gray-500 mt-4">
            Copyright © 2000-2024 sahibinden.com. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
