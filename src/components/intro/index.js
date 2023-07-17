import Image from "next/image";
import React from "react";
import car from "../../../public/assets/img_car.png";
import Link from "next/link";

const Intro = ({ isHidden }) => {
  return (
    <div className="bg-[#F1F3FF] w-full relative ">
      <div className="bg-[#F1F3FF] flex lg:flex-row flex-col w-full max-w-screen-2xl lg:max-w-screen-xl mx-auto min-h-[25.438rem] ">
        <div className="w-full lg:w-1/2 lf:w-3/4 lgd:w-full flex flex-col justify-center items-center lg:items-start lg:text-left text-center p-4">
          <div className="text-4xl italic my-2">
            Sewa & Rental Mobil Terbaik di Kawasan Surabaya
          </div>
          <div className="italic my-2 text-lg">
            Selamat datang di YOKRENT. Kami menyediakan mobil kualitas terbaik
            dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa
            mobil selama 24 jam.
          </div>
          <Link
            href="/cari-mobil"
            className={`bg-[#5CB85F] rounded italic py-2 px-4 text-white my-4 ${
              isHidden ? "invisible" : "visible"
            }`}
          >
            Mulai Sewa Mobil
          </Link>
        </div>
        <Image src={car} alt="" className="visible lg:invisible w-full" />
      </div>
      <Image
        src={car}
        alt=""
        className="lg:visible invisible hidden lg:block  lg:absolute right-0 bottom-0"
      />
    </div>
  );
};
export default Intro;
